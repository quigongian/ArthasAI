import boto3
from botocore.exceptions import ClientError
from fastapi import HTTPException
import pickle
import datetime
import botocore.exceptions
from pathlib import Path
from botocore.exceptions import ClientError
from .config import Settings
from .dependencies import get_s3_client, get_together_client
from dotenv import load_dotenv
from typing import List
import json


def configure():
    load_dotenv()
configure()

settings = Settings()

together_api_key = get_together_client
aws_access_key_id = settings.aws_access_key_id
aws_secret_access_key = settings.aws_secret_access_key
s3_client = get_s3_client()



def save_to_storage(paper_id: str, data: dict):
    """
    Saves the given data to an AWS S3 bucket with a key constructed from the user ID, paper ID, and the current timestamp.

    Parameters:
    - user_id (str): The user's ID.
    - paper_id (str): The paper's ID.
    - data (dict): The data to save.
    - s3_client (boto3.client): The boto3 S3 client instance.

    Raises:
    - HTTPException: If there is an error saving the data to S3.
    """
    current_timestamp = datetime.datetime.now(datetime.timezone.utc)
    key = f"{paper_id}-{current_timestamp}-context.pkl"

    serialized_data = pickle.dumps(data)
    try:
        s3_client.put_object(Bucket=settings.bucket, Key=key, Body=serialized_data)
    except botocore.exceptions.ClientError as e:
        #handle the exception accordingly
        raise HTTPException(status_code=500, detail=str(e))
    
def load_from_storage(paper_id: str) -> dict:
    """
    Loads the most recent data for the given user ID and paper ID from an AWS S3 bucket.

    Parameters:
    - user_id (str): The user's ID.
    - paper_id (str): The paper's ID.
    - s3_client (boto3.client): The boto3 S3 client instance.

    Returns:
    - dict: The most recent data found for the user and paper.

    Raises:
    - HTTPException: If there is an error loading the data from S3 or if no data is found.
    """
        
    prefix = f"{paper_id}-"
    response = s3_client.list_objects_v2(Bucket=settings.bucket, Prefix=prefix)

    # Extracting keys and sorting them to find the most recent
    keys = [obj['Key'] for obj in response.get('Contents', [])]
    keys.sort(reverse=True)  # Assuming the most recent object is desired

    if keys:
        try:
            response = s3_client.get_object(Bucket=settings.bucket, Key=keys[0])  # Most recent object
            serialized_data = response['Body'].read()
            return pickle.loads(serialized_data)
        except botocore.exceptions.ClientError as e:
            raise HTTPException(status_code=500, detail=str(e))
    else:
        raise HTTPException(status_code=404, detail="No data found")
    
def save_embeddings_to_s3( paper_id: str, embeddings: List[List[float]]):
    key = f"{paper_id}-embeddings.pkl"
    serialized_data = pickle.dumps(embeddings)  # Serialize embeddings directly here
    try:
        s3_client.put_object(Bucket=settings.bucket, Key=key, Body=serialized_data)
    except botocore.exceptions.ClientError as e:
        raise HTTPException(status_code=500, detail=str(e))

def load_embeddings_from_s3( paper_id: str) -> List[List[float]]:
    key = f"{paper_id}-embeddings.pkl"
    try:
        response = s3_client.get_object(Bucket=settings.bucket, Key=key)
        serialized_data = response['Body'].read()
        embeddings = pickle.loads(serialized_data)  # Deserialize
        return embeddings
    except botocore.exceptions.ClientError as e:
        raise HTTPException(status_code=404, detail="Embeddings not found")

def get_user_paper_ids(user_id: str) -> List[str]:
    """
    Retrieves all paper IDs associated with the given user ID from an AWS S3 bucket.

    Parameters:
    - user_id (str): The user's ID.
    - s3_client (boto3.client): The boto3 S3 client instance.

    Returns:
    - List[str]: A list of paper IDs associated with the user.

    Raises:
    - HTTPException: If there is an error accessing the S3 bucket.
    """
    try:
        # Initialize an empty list to hold the paper IDs
        paper_ids = []
        
        # Use the paginator to handle buckets with many objects
        paginator = s3_client.get_paginator('list_objects_v2')
        page_iterator = paginator.paginate(Bucket=settings.bucket, Prefix=f"{user_id}-")
        
        # Iterate through each page of results
        for page in page_iterator:
            if "Contents" in page:
                # Extract paper IDs from the object keys
                for obj in page["Contents"]:
                    key_parts = obj['Key'].split('-')
                    if len(key_parts) >= 2:
                        paper_id = key_parts[1]
                        if paper_id not in paper_ids:
                            paper_ids.append(paper_id)
        
        return paper_ids
    except botocore.exceptions.ClientError as e:
        raise HTTPException(status_code=500, detail=str(e))

def list_and_retrieve_mmd_files(Bucket: str, prefix: str) -> List[dict]:
    """
    Retrieves all .mmd files under the specified prefix in an S3 bucket and returns their contents.

    Parameters:
    - bucket_name (str): The name of the S3 bucket.
    - prefix (str): The prefix where the .mmd files are stored.

    Returns:
    - List[dict]: A list of dictionaries with the file key and content.
    """
    try:
        s3_client = boto3.client('s3')
        paginator = s3_client.get_paginator('list_objects_v2')
        mmd_contents = []

        for page in paginator.paginate(Bucket=Bucket, Prefix=prefix):
            for obj in page.get('Contents', []):
                key = obj['Key']
                if key.endswith('.mmd'):
                    response = s3_client.get_object(Bucket=Bucket, Key=key)
                    content = response['Body'].read().decode('utf-8')
                    mmd_contents.append({'key': key, 'content': content})

        return mmd_contents
    except ClientError as e:
        raise HTTPException(status_code=500, detail=str(e.response['Error']['Message']))

def convert_mmd_to_jsonl_and_save(s3_client, Bucket: str, mmd_contents: List[dict]):
    """
    Converts a list of .mmd file contents to JSONL format and saves the copies back to the S3 bucket.

    Parameters:
    - s3_client (boto3.client): The boto3 S3 client instance.
    - bucket_name (str): The name of the S3 bucket.
    - mmd_contents (List[dict]): A list of dictionaries with the file key and content.
    """
    for mmd in mmd_contents:
        # Define the new key for the JSONL file
        jsonl_key = mmd['key'].replace('.mmd', '.jsonl')
        
        # Convert the MultiMarkdown content to the JSONL format
        jsonl_content = json.dumps({'text': mmd['content']}) + '\n'
        
        # Save the JSONL formatted data back to the S3 bucket
        try:
            s3_client.put_object(Bucket=Bucket, Key=jsonl_key, Body=jsonl_content)
            print(f"Saved JSONL copy: {jsonl_key}")
        except ClientError as e:
            raise HTTPException(status_code=500, detail=str(e.response['Error']['Message']))

def serialize_embeddings(embeddings):
    serialized_embeddings = pickle.dumps(embeddings)
    return serialized_embeddings

def mmd_to_json():
    
    Bucket=settings.bucket
    mmd_prefix = 'arxiv_markdown/'

    mmd_files_contents = list_and_retrieve_mmd_files(Bucket, mmd_prefix)


bucket_name = 'arthasai'
source_prefix = 'arxiv_markdown/'

"""
def get_paper_by_id(bucket_name, folder_prefix, document_id):
 
    s3_client = boto3.client('s3')

    try:
        # List all objects in the specified folder
        response = s3_client.list_objects_v2(Bucket=bucket_name, Prefix=folder_prefix)

        # Check if the response contains the 'Contents' key
        if 'Contents' not in response:
            raise ValueError("No files found in the specified folder.")

        # Filter out only the relevant .mmd files
        mmd_files = [obj['Key'] for obj in response['Contents'] if obj['Key'].endswith('.mmd')]

        # Sort the files by their name or you could sort them by 'LastModified' if needed
        mmd_files.sort()

        # Get the key of the file at the specified index (document_id)
        file_key = mmd_files[document_id - 1]  # Subtract 1 because list indices start at 0

        return file_key

    except IndexError:
        raise ValueError(f"Document ID {document_id} is out of range. No such file exists.")
    except ClientError as e:
        raise ClientError(f"Failed to retrieve file key: {e.response['Error']['Message']}")
    except Exception as e:
        raise Exception(f"An error occurred: {e}")
"""

