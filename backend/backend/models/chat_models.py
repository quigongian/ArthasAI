from pydantic import BaseModel

class ChatInput(BaseModel):
    question: str

