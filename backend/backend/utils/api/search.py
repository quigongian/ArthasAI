from utils.db.neo4j import driver
from utils.embeddings import get_embeddings

def top_k_abstract_query(query: str, k: int = 5): 
    """
    Get the top k papers based on the abstract cosine similatiry
    TODO: maybe handle filters here?
    """

    query_embedding = get_embeddings([query], "togethercomputer/m2-bert-80M-8k-retrieval")[0]

    QUERY = """
    MATCH (p:Paper)
    call db.index.vector.queryNodes('abstract_embedding_index', $k, $query_embedding) YIELD node, score
    WITH node {.*, abstract_embedding: null}, score
    return {paper: node, score: score} as data
    """

    with driver.session() as session:
        result = session.run(QUERY, query_embedding=query_embedding, k=k)
        return result.data()