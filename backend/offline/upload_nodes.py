"""
dependencies: boto3 python_dotenv
"""

import os
import requests
import time
import argparse

import boto3
from dotenv import load_dotenv

load_dotenv("../.env")
# parser = argparse.ArgumentParser(description = "Python script to upload papers to Neo4j offline")
# parser.add_argument('--have_papers', action = 'read_papers', help = 'Indicates whether papers are already stored locally on a json file, in which case the script does not read from the S3 bucket.')


def only_id(filename):
  return ".".join(filename.split('/')[-1].split('.')[:-1])

def files_with_prefix(bucket_name, prefix):
    client = boto3.client(
        's3',
        aws_access_key_id=os.getenv("aws_access_key_id"),
        aws_secret_access_key=os.getenv("aws_secret_access_key"),
    )
    response = client.list_objects_v2(Bucket=bucket_name, Prefix=prefix)

    files = []
    if 'Contents' in response:
        for obj in response['Contents']:
            files.append(only_id(obj['Key']))
    return files

def get_citation_count(papers):
  """
  Input:
    papers: List of strings of the format "ARXIV:XXXXX.XXXXX", where the value after of ARXIV: is the arxiv id. As an example: "ARXIV:2106.15928".
  """
  too_many_request = False

  result = []
  while not too_many_request:
    response = requests.post(
      'https://api.semanticscholar.org/graph/v1/paper/batch',
      params={'fields': 'influentialCitationCount,externalIds,citationCount,title,abstract,publicationDate'},
      json={"ids": papers}
    )

    print(response.json())
    if response.status_code == 200:
      data = response.json()
      print(data)

      # Handle Arxiv id not found by API
      for article in data:
        if article is not None:
          cite_count = article['citationCount']
          inf_cite_count = article['influentialCitationCount']
          arxiv_id = article['externalIds']['ArXiv']
          title = article['title']
          abstract = article['abstract']
          publication_date = article['publicationDate'] 
          pdf_blob = f"https://arthasai.s3.us-east-2.amazonaws.com/arxiv_pdfs/{arxiv_id}.pdf"
          result.append({"citation_count" : cite_count, "id": arxiv_id, "inf_cite_count" : inf_cite_count, "title": title, "abstract" : abstract, "publication_date" : publication_date, "pdf_blob" : pdf_blob})

      return result
    elif response.status_code == 429:
      too_many_request = True
      time.sleep(10)
    else:
      print(f"Error: {response.status_code}")
      return []

ids = files_with_prefix('arthasai', 'arxiv_markdown')[1:]
prefix_ids = list(map(lambda x : f"ARXIV:{x}", ids))

response = requests.post(
'https://api.semanticscholar.org/graph/v1/paper/batch',
params={'fields': 'influentialCitationCount,externalIds,citationCount,title,abstract,publicationDate'},
json={"ids": prefix_ids}
)

for paper in response:
    if paper is not None:
        requests.post("localhost:3001", data = paper)
# Need title, id, arxiv_id, markdown, abstract, pdf_blob, publication_date