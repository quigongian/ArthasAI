from models.request_models import Paper
from pydantic import BaseModel
from typing import List, Optional

class Paper(Paper):
    cite_count: int
    inf_cite_count: int
    title: str
    abstract: str
    publication_date: str
    pdf_blob: str
    arxiv_id: str
    raw_markdown: str
    abstract_embedding: Optional[List[float]] = None
    id: str