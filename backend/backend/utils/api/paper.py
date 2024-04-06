import os
import requests
import boto3
from models.dto_models import Paper
from utils.db.neo4j import driver
from utils.embeddings import get_embeddings

# BEGIN CODE FROM DAVID TO GET METADATA
def only_id(filename):
  return ".".join(filename.split('/')[-1].split('.')[:-1])

def files_with_prefix(bucket_name, prefix):
    client = boto3.client(
        's3',
        aws_access_key_id=os.getenv("aws_access_key_id"),
        aws_secret_access_key=os.getenv("aws_secret_access_key"),
    )
    response = client.list_objects_v2(Bucket=bucket_name, Prefix=prefix)

    files = []
    if 'Contents' in response:
        for obj in response['Contents']:
            files.append(only_id(obj['Key']))
    return files

def get_citation_count(paper):
    """
    Input:
        papers: List of strings of the format "ARXIV:XXXXX.XXXXX", where the value after of ARXIV: is the arxiv id. As an example: "ARXIV:2106.15928".
    """

    response = requests.post(
      'https://api.semanticscholar.org/graph/v1/paper/paper',
      params={'fields': 'influentialCitationCount,externalIds,citationCount,title,abstract,publicationDate'},
    )

    print(response.json())
    if response.status_code == 200:
        data = response.json()
        print(data)

        if not data:
            print("Error: No data found")
            #throw an error

        paper = Paper(**data[0])
        # cite_count = article['citationCount']
        # inf_cite_count = article['influentialCitationCount']
        # arxiv_id = article['externalIds']['ArXiv']
        # title = article['title']
        # abstract = article['abstract']
        # publication_date = article['publicationDate'] 
        # pdf_blob = f"https://arthasai.s3.us-east-2.amazonaws.com/arxiv_pdfs/{arxiv_id}.pdf"

        return paper
    else:
        print(f"Error: {response.status_code}")

# END CODE FROM DAVID TO GET METADATA

def upload_paper_with_metadata(paper: Paper):
    """
    Inserts the paper + metadata into the database
    """

    #compute the abstract embedding;
    abstract_embedding = get_embeddings([paper.abstract], model='togethercomputer/m2-bert-80M-8k-retrieval')[0]

    QUERY = """
    MERGE (p:Paper {arxiv_id: $arxiv_id})
    ON CREATE SET p.title = $title,
    p.abstract = $abstract,
    p.publication_date = $publication_date,
    p.cite_count = $cite_count,
    p.inf_cite_count = $inf_cite_count,
    p.pdf_blob = $pdf_blob,
    p.raw_markdown = $raw_markdown,
    p.abstract_embedding = $abstract_embedding
    RETURN p
    """

    with driver.session() as session:
        result = session.run(QUERY, arxiv_id=paper.arxiv_id, title=paper.title, abstract=paper.abstract, publication_date=paper.publication_date, cite_count=paper.cite_count, inf_cite_count=paper.inf_cite_count, pdf_blob=paper.pdf_blob, raw_markdown=paper.raw_markdown, abstract_embedding=abstract_embedding)
        return result.data()

def get_all_papers():
    """
    Get all the papers in the database
    """

    QUERY = """
    MATCH (p:Paper)
    RETURN p
    """

    with driver.session() as session:
        result = session.run(QUERY)
        return result.data()