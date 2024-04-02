import boto3
import json
import pickle
from typing import Any
from config import Settings
from dependencies import get_s3_client, get_together_client
from dotenv import load_dotenv
import os, sys, inspect
import botocore

def configure():
    load_dotenv()
configure()

settings = Settings()

together_api_key = get_together_client
aws_access_key_id = settings.aws_access_key_id
aws_secret_access_key = settings.aws_secret_access_key
s3_client = get_s3_client()


def convert_pickle_to_json_and_save(user_id: str, paper_id: str):
    """
    Converts a specified pickle file for a user and paper ID from S3 to JSON
    and saves the JSON back to S3.

    Parameters:
    - user_id (str): The ID of the user.
    - paper_id (str): The ID of the paper.
    """
    s3_client = get_s3_client()
    bucket_name = settings.bucket
    
    pickle_key = f"{user_id}-{paper_id}-context.pkl"
    json_key = f"{user_id}-{paper_id}-context.json"
    
    # Load the pickle file from S3
    try:
        response = s3_client.get_object(Bucket=bucket_name, Key=pickle_key)
        pickle_data = pickle.loads(response['Body'].read())
    except botocore.exceptions.ClientError as e:
        print(f"Error loading pickle file: {e}")
        return

    # Convert the data to JSON
    try:
        json_data = json.dumps(pickle_data, default=str)  # Use default=str to handle non-serializable data
    except TypeError as e:
        print(f"Error converting data to JSON: {e}")
        return
    
    # Save the JSON back to S3
    try:
        s3_client.put_object(Bucket=bucket_name, Key=json_key, Body=json_data)
        print(f"Successfully converted and saved: {json_key}")
    except botocore.exceptions.ClientError as e:
        print(f"Error saving JSON to S3: {e}")