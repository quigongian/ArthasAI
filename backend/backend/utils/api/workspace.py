from utils.db.neo4j import driver
import uuid

def create_workspace(user_id: str, workspace_name: str, workspace_description: str):
    QUREY = """
    MATCH (u:User {id: $user_id})
    MERGE (w:Workspace {workspace_id: $workspace_id, workspace_name: $workspace_name, workspace_description: $workspace_description})
    MERGE (u)-[:HAS_WORKSPACE]->(w)
    return w.workspace_id as workspace_id
    """

    workspace_id = str(uuid.uuid4())

    print(workspace_id, user_id)

    with driver.session() as session:
        result = session.run(QUREY, user_id=user_id, workspace_name=workspace_name, workspace_description=workspace_description, workspace_id=workspace_id)
        return result.data()

def add_paper_to_workspace(workspace_id: str, paper_id: str):
    """
    Add a paper to a user's workspace given the workspace id and paper id
    """

    QUERY = """
    MATCH (w:Workspace {workspace_id: $workspace_id})
    MATCH (p:Paper {id: $paper_id})
    MERGE (w)-[hp:HAS_PAPER]->(p)
    SET hp.added_on = datetime()
    """

    with driver.session() as session:
        result = session.run(QUERY, workspace_id=workspace_id, paper_id=paper_id)
        return result.data()

def get_workspace(workspace_id: str, user_id: str):
    """
    Get all the papers in a workspace
    """

    QUERY = """
    MATCH (u:User {id: $user_id})
    MATCH (w:Workspace {workspace_id: $workspace_id})
    WHERE (u)-[:HAS_WORKSPACE]->(w)
    MATCH (w)-[:HAS_PAPER]->(p:Paper)
    RETURN w, p
    """

    with driver.session() as session:
        result = session.run(QUERY, workspace_id=workspace_id, user_id=user_id)
        return result.data()

def get_all_workspaces(user_id: str):
    """
    Get all the workspaces for a user
    """

    QUERY = """
    MATCH (u:User {id: $user_id})
    MATCH (u)-[:HAS_WORKSPACE]->(w:Workspace)
    RETURN w
    """

    with driver.session() as session:
        result = session.run(QUERY, user_id=user_id)
        return result.data()

def get_all_workspace_graph(user_id: str):
    """
    Get all the workspaces for a user, and create a graph out of the
    - relationships between the papers
    - parent clusters of the papers
    """

    QUERY = """
    MATCH (user:User {id: $user_id})
    MATCH (user)-[has_workspace_rel:HAS_WORKSPACE]->(workspace:Workspace)
    OPTIONAL MATCH (workspace)-[:HAS_PAPER]->(paper:Paper)
    OPTIONAL MATCH (cluster:Cluster)-[contains_paper_rel:CONTAINS]->(paper)
    WITH {title: paper.title, id: paper.id} as paper, workspace, cluster, user, has_workspace_rel, contains_paper_rel
    RETURN workspace, paper, cluster, user, has_workspace_rel, contains_paper_rel
    """

    with driver.session() as session:
        result = session.run(QUERY, user_id=user_id)
        return result.data()