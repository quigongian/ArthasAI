from fastapi import FastAPI, HTTPException
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

from pydantic import BaseModel
import pickle  # For serialization

from Chat_functionality.storage import save_to_storage, load_from_storage, load_embeddings_from_s3, save_embeddings_to_s3
from Chat_functionality.config import Settings
from Chat_functionality.chat import answer_question
from typing import List
from Chat_functionality.embeddings import get_embeddings
from Chat_functionality.dependencies import get_s3_client, get_together_client
from models.chat_models import ChatInput
settings = Settings()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

together_api_key = get_together_client
aws_access_key_id = settings.aws_access_key_id
aws_secret_access_key = settings.aws_secret_access_key
s3_client = get_s3_client()
client = together.Together()

from Raptor_Markdown.Raptor import retrieve_context

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

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

@app.post("/chat/{paper_id}")
def chat( paper_id: str, chat_input: ChatInput):
    #load existing context, if any
    try:
        context = load_from_storage(paper_id)
    except HTTPException as e:
        context = {'chat_history': []}

    
    #updating context with new chat input and embeddings
    
    #Note: You'd also want to store the chat output here
    new_chat_input = chat_input.question
    embeddings = get_embeddings([new_chat_input], model='togethercomputer/m2-bert-80M-8k-retrieval')
    context['chat_history'].append({'input':new_chat_input, 'embedding': embeddings})
    #save updated context

    concatenated_prompts = "\n".join([entry['input'] for entry in context['chat_history']]) + "\n" + new_chat_input

    save_to_storage(paper_id, context)

    paper_context: str = retrieve_context(document_id=paper_id, question=concatenated_prompts)

        # Here you would integrate with your AI model to get a response, using the embeddings as needed
    ai_response =  answer_question(context=paper_context, question=new_chat_input)

    return {"Chat": ai_response,
            "Chat_History": context['chat_history']}


@app.get("/graph")
def get_graph():
    return {"Graph": "GET Request"}


if __name__ == "__main__":
    import uvicorn
    import sys
    import os
    sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
    from backend.Chat_functionality.config import settings   
    uvicorn.run(app, host="0.0.0.0", port=8000)


