from pydantic import BaseModel

class Workspace(BaseModel):
    user_id: str
    workspace_name: str
    workspace_description: str

class Paper(BaseModel):
    arxiv_id: str