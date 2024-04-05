from request_models import Paper

class Paper(Paper):
    cite_count: int
    inf_cite_count: int
    title: str
    abstract: str
    publication_date: str
    pdf_blob: str
    arxiv_id: str
    raw_markdown: str