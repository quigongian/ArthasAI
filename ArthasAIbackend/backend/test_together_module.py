import requests
from dotenv import load_dotenv
import os, sys, inspect
from config import Settings
from dependencies import get_s3_client, get_together_client
from typing import List
import json
import together
from storage import list_and_retrieve_mmd_files
import boto3
from botocore.exceptions import ClientError
import botocore.exceptions
from fastapi import HTTPException


def configure():
    load_dotenv()
configure()

settings = Settings()

together_api_key = get_together_client
aws_access_key_id = settings.aws_access_key_id
aws_secret_access_key = settings.aws_secret_access_key
s3_client = get_s3_client()



Bucket=settings.bucket
mmd_prefix = 'arxiv_jsonl/'

import boto3
import tempfile
import together
from fastapi import HTTPException
from botocore.exceptions import ClientError

# Instantiate the Together AI client
together_client = together.Together()

def list_and_check_jsonl_files(bucket_name: str, prefix: str):
    """
    Lists all .jsonl files under the specified prefix in an S3 bucket, downloads them,
    and checks each file with Together AI's file check.

    Parameters:
    - bucket_name (str): The name of the S3 bucket.
    - prefix (str): The prefix where the .jsonl files are stored.
    """
    s3_client = boto3.client('s3')
    paginator = s3_client.get_paginator('list_objects_v2')
   

    for page in paginator.paginate(Bucket=Bucket, Prefix=prefix):
        for obj in page.get('Contents', []):
            key = obj['Key']
            if key.endswith('.jsonl'):
                # Download the file content
                response = s3_client.get_object(Bucket=bucket_name, Key=key)
                content = response['Body'].read().decode('utf-8')

                # Save the content to a temporary file
                with tempfile.NamedTemporaryFile(mode='w+', suffix='.jsonl', delete=False) as temp_file:
                    temp_file.write(content)
                    temp_file.flush()

                    # Use Together AI's SDK to check the file
                    resp = together_client.files.check(file=temp_file.name)
                    print(f"Check result for {key}: {resp}")
                    
                    # Clean up the temporary file if needed
                    # os.unlink(temp_file.name)

# Usage

#list_and_check_jsonl_files(Bucket, mmd_prefix)


def combine_jsonl_files(bucket_name: str, prefix: str, combined_file_path: str, s3_client):
    """
    Combines all .jsonl files from an S3 bucket into a single .jsonl file.

    Parameters:
    - bucket_name (str): The name of the S3 bucket.
    - prefix (str): The prefix under which the .jsonl files are stored.
    - combined_file_path (str): The local file path where the combined .jsonl will be saved.
    - s3_client (boto3.client): The boto3 S3 client instance.
    """
    paginator = s3_client.get_paginator('list_objects_v2')
    combined_content = ""

    try:
        for page in paginator.paginate(Bucket=bucket_name, Prefix=prefix):
            for obj in page.get('Contents', []):
                key = obj['Key']
                if key.endswith('.jsonl'):
                    # Download the file content
                    response = s3_client.get_object(Bucket=bucket_name, Key=key)
                    file_content = response['Body'].read().decode('utf-8')
                    combined_content += file_content + '\n'
        
        # Save the combined content to the specified local file path
        with open(combined_file_path, 'w', encoding='utf-8') as combined_file:
            combined_file.write(combined_content.strip())

        print(f"Combined file saved to {combined_file_path}")
    except ClientError as e:
        raise Exception(f"Error occurred while combining .jsonl files: {e}")
    
    # Example usage of the combine_jsonl_files function

jsonl_prefix = 'arxiv_jsonl/'
local_combined_file_path = 'combined.jsonl'

combine_jsonl_files(Bucket, jsonl_prefix, local_combined_file_path, s3_client)

def remove_newlines_from_jsonl(file_path: str):
    """
    Reads a .jsonl file, removes all newline characters within JSON strings, and writes the contents back to the file.

    Parameters:
    - file_path (str): The path to the .jsonl file.
    """
    try:
        # Read the content of the file
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
        
        # Remove newline characters within each JSON object string
        cleaned_lines = [line.replace("\\n", "") for line in lines]
        
        # Write the cleaned content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.writelines(cleaned_lines)
            
        print(f"Newlines removed from {file_path}")
    except Exception as e:
        raise Exception(f"Error occurred while removing newlines: {e}")
    
remove_newlines_from_jsonl(local_combined_file_path)