from utils.api.workspace import create_workspace
from utils.api.paper import upload_paper_with_metadata
from models.dto_models import Paper
import json
import os
import uuid

def seed_db():
    create_workspace(user_id="user1", workspace_name="workspace1", workspace_description="my first workspace")

    # upload_paper_with_metadata(Paper(title="My First Paper", id="123", abstract="This is the abstract of my first paper", arxiv_id="2106.15928", cite_count=10, inf_cite_count=5, publication_date="2021-06-28", pdf_blob="https://arthasai.s3.us-east-2.amazonaws.com/arxiv_pdfs/2106.15928.pdf", raw_markdown="# test"))

    print(os.getcwd())
    papers = json.load(open(os.path.join(os.getcwd(), "utils/scripts/paper_metadata.json"), "r"))
    
    for paper in papers:
        paper_uuid = str(uuid.uuid4())
        parsed_paper: Paper = {
            "cite_count": paper["citation_count"],
            "inf_cite_count": paper["inf_cite_count"],
            "publication_date": paper["publication_date"] if "publication_date" in paper and paper["publication_date"] is not None else "2021-06-28",
            "pdf_blob": f"https://arxiv.org/pdf/{paper['id']}.pdf",
            "raw_markdown": "# test",
            "title": paper["title"],
            "abstract": paper["abstract"],
            "arxiv_id": paper["id"],
            "id": paper_uuid
        }

        upload_paper_with_metadata(Paper(**parsed_paper))
