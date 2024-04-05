from utils.db.neo4j import driver

def top_k_abstract_query(query: str): 
    """
    Get the top k papers based on the abstract cosine similatiry
    TODO: maybe handle filters here?
    """

    QUERY = """
    MATCH (p:Paper)
    call db.index.vector.queryNodes('abstract_embedding_index', 3, p.abstract_embedding) YIELD node, score
    WITH node {.*, abstract_embedding: null}, score
    return {paper: node, score: score} as data
    """

    with driver.session() as session:
        result = session.run(QUERY)
        return result.data()