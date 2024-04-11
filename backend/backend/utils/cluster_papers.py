"""
Cluster research papers based on their abstracts, and store the clusters in the database
The purpose of this is to aid with the graph visualization feature: nodes returned in the search results will be connected to their respective clusters, containing a summary
The clustering is hierarchical, so the clusters will be further clustered and summarized, creating a tree-like structure.
"""

from typing import List
from sklearn.mixture import GaussianMixture
from sklearn.manifold import TSNE
import numpy as np
from utils.db.neo4j import driver
from pydantic import BaseModel
import uuid
from embeddings import get_embeddings
from models.dto_models import Paper
import os
from openai import OpenAI
import json

client = OpenAI(
  api_key=os.getenv("TOGETHER_API_KEY"),
  base_url='https://api.together.xyz/v1',
)

class PaperClusterNode(BaseModel):
    id: str
    title: str
    text: str # this will either be the summary if the node is a cluster, or the abstract if it's a paper
    embedding: List[float]

class SummaryResponse(BaseModel):
    title: str
    summary: str

def cluster_papers(papers: List[Paper], n_clusters: int = 10):
    print(papers)
    # convert the papers to PaperClusterNode objects
    paper_nodes = [PaperClusterNode(id=paper["id"], text=paper["abstract"], embedding=paper["abstract_embedding"], title=paper["title"]) for i, paper in enumerate(papers)]
    recursive_cluster(paper_nodes, n_clusters)

def create_cluster_summaries(cluster_texts: List[List[str]]) -> List[str]:
    """
    Create a summary of the cluster based on the text of the papers in the cluster
    """

    summaries: List[SummaryResponse] = []

    for texts in cluster_texts:
        chat_completion = client.chat.completions.create(
        messages=[
            {
            "role": "system",
            "content": "You are an expert supparizer, tasked with creating a summary of clusters of research papers, given the abstracts of all the papers in the cluster. Also output a title that is appropriate for the cluster. Your output should be JSON of the form {\"title\": \"Title of the cluster\", \"summary\": \"Summary of the cluster\"}."
            },
            {
            "role": "user",
            "content": "Here are the abstracts of the papers in the cluster: " + "\n\n".join(texts),
            }
        ],
        model="mistralai/Mixtral-8x7B-Instruct-v0.1"
        )

        # print("RAW RESPONSE", chat_completion.choices[0].message.content)
        response = json.loads(chat_completion.choices[0].message.content)
        print("SUMMARIZATION", response["summary"])
        summaries.append(response)

    return summaries


def recursive_cluster(nodes: List[PaperClusterNode], n_clusters: int = 5):
    """
    Recursively cluster the papers based on their embeddings and store the clusters in the database
    'node' can be either a paper (if it's a leaf node) or a cluster (if it's an internal node in the tree)
    """

    # convert the embeddings to t-sne
    embeddings = np.array([node.embedding for node in nodes])
    tsne = TSNE(n_components=2, perplexity=2, n_iter=5000)
    tsne_embeddings = tsne.fit_transform(embeddings)

    # cluster the papers
    gmm = GaussianMixture(n_components=n_clusters)
    clusters = gmm.fit_predict(tsne_embeddings)

    # get the text of all the nodes belonging to each cluster
    cluster_texts = [[] for _ in range(n_clusters)]

    for i, cluster in enumerate(clusters):
        print(cluster, nodes[i].text)
        print("CLUSTER", cluster)
        cluster_texts[cluster].append(nodes[i].text)
    
    # summarize the text of each cluster
    cluster_summaries = create_cluster_summaries(cluster_texts)
    cluster_objects = []

    # store the clusters in the database
    with driver.session() as session:
        for i, summary_res in enumerate(cluster_summaries):
            cluster_uuid = str(uuid.uuid4())

            cluster_objects.append({
                "id": cluster_uuid,
                "title": summary_res["title"],
                "summary": summary_res["summary"],
                "embedding": get_embeddings([summary_res["summary"]], "togethercomputer/m2-bert-80M-8k-retrieval")[0]
            })

            # Convert PaperClusterNode objects to dictionaries (to avoid type errors)
            node_data = [
                {
                    "id": node.id,
                    "title": node.title,
                    "text": node.text,
                    "embedding": node.embedding
                }
                for j, node in enumerate(nodes) if clusters[j] == i
            ]

            session.run("MERGE (c:Cluster {id: $id, summary: $summary, title: $title})", id=cluster_uuid, summary=summary_res["summary"], title=summary_res["title"])
            session.run("""
                        WITH $papers as papers
                        UNWIND papers as paper
                        MATCH (p:Paper|Cluster {id: paper.id})
                        MATCH (c:Cluster {id: $cluster_id})
                        MERGE (c)-[:CONTAINS]->(p)
                        """, papers=node_data, cluster_id=cluster_uuid)
    
    new_n_clusters = n_clusters // 2
    if new_n_clusters > 1:
        recursive_cluster(cluster_objects, new_n_clusters)

    return

