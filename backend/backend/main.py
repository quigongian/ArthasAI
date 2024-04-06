from fastapi import FastAPI
import dotenv
import os
from utils.api.workspace import create_workspace, add_paper_to_workspace, get_all_workspaces, get_workspace
from models.request_models import Workspace
from models.dto_models import Paper
from utils.api.paper import upload_paper_with_metadata, get_all_papers
from utils.api.search import top_k_abstract_query
import together

dotenv.load_dotenv()
together.api_key = os.getenv("TOGETHER_API_KEY")

app = FastAPI()

@app.get("/")
def search_results():
    return {"Homepage": 
            "use /search to search for papers, /upload to upload a paper, /chat to chat with a bot, /graph to get a graph of the data."}

@app.get("/search")
def search_results(query: str):
    """
    Return the top k papers based on the abstract cosine similarity
    """
    res = top_k_abstract_query(query=query, k=3)
    return {"message": "Papers retrieved successfully", "data": res}

@app.post("/paper")
def route_upload_paper(paper: Paper):
    """
    NOTE: right now this route takes in a markdown paper, with all the metadata already in the request
    in the future, we will have this route take in a pdf + doi, hit semetic scholar api to get metadata, and then convert the pdf to markdown
    """
    # print(os.getenv("TOGETHER_API_KEY"))

    res = upload_paper_with_metadata(paper)

    return {"message": "Paper uploaded successfully", "paper": res}

@app.post("/workspace")
def route_create_workspace(workspace: Workspace):
    print(workspace)
    result = create_workspace(user_id=workspace.user_id, workspace_name=workspace.workspace_name, workspace_description=workspace.workspace_description)
    return {"message": "Workspace created successsfully", "workspace_id": result[0]["workspace_id"]}

@app.post("/workspace/{workspace_id}/paper/{paper_id}")
def route_add_paper_to_workspace(workspace_id: str, paper_id: str):
    """
    Add a paper to a user's workspace given the workspace id and paper id
    """

    res = add_paper_to_workspace(workspace_id, paper_id)
    return {"message": "Paper added to workspace successfully", "data": res}

@app.get("/workspace/{workspace_id}")
def route_get_workspace_by_id(workspace_id: str):
    res = get_workspace(workspace_id, user_id="test user")
    return {"message": "Workspace retrieved successfully", "data": res}

@app.get("/workspace")
def route_get_all_workspaces_for_user():
    res = get_all_workspaces(user_id="test user")
    return {"message": "Workspaces retrieved successfully", "data": res}

@app.get("/chat")
def chat():
    return {"Chat": "GET Request"}

@app.get("/graph")
def get_graph():
    return {"Graph": "GET Request"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)

