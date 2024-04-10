from utils.api.workspace import create_workspace
from utils.api.paper import upload_paper_with_metadata
from models.dto_models import Paper

def seed_db():
    create_workspace(user_id="user1", workspace_name="workspace1", workspace_description="my first workspace")

    upload_paper_with_metadata(Paper(title="My First Paper", abstract="This is the abstract of my first paper", arxiv_id="2106.15928", cite_count=10, inf_cite_count=5, publication_date="2021-06-28", pdf_blob="https://arthasai.s3.us-east-2.amazonaws.com/arxiv_pdfs/2106.15928.pdf", raw_markdown="# test"))