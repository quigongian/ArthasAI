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
import pickle


def configure():
    load_dotenv()
configure()

settings = Settings()

together_api_key = get_together_client
aws_access_key_id = settings.aws_access_key_id
aws_secret_access_key = settings.aws_secret_access_key
s3_client = get_s3_client()



Bucket=settings.bucket
mmd_prefix = "arxiv_markdown/"


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


def markdown_files_to_pickles(Bucket, source_prefix: str, target_prefix: str, s3_client):
    """
    Converts each .mmd file from a specified folder (source_prefix) in an S3 bucket into individual pickle files 
    and uploads them to another folder (target_prefix) within the same bucket.

    Parameters:
    - bucket_name (str): The name of the S3 bucket.
    - source_prefix (str): The source folder under which the .mmd files are stored.
    - target_prefix (str): The target folder where the pickle files will be saved.
    - s3_client (boto3.client): The boto3 S3 client instance.
    """
    paginator = s3_client.get_paginator('list_objects_v2')

    for page in paginator.paginate(Bucket=bucket_name, Prefix=source_prefix):
        for obj in page.get('Contents', []):
            key = obj['Key']
            if key.endswith('.mmd'):
                # Download the file content
                response = s3_client.get_object(Bucket=bucket_name, Key=key)
                file_content = response['Body'].read().decode('utf-8')
                
                # Serialize the content to a pickle format
                pickle_content = pickle.dumps(file_content)
                
                # Construct the pickle file key with target_prefix
                file_name = key.split('/')[-1]  # Extract file name from the key
                pickle_key = f"{target_prefix}{file_name.replace('.mmd', '.pkl')}"  # Build new key for the pickle file
                
                # Upload the pickle content directly to the target folder within the same S3 bucket
                try:
                    s3_client.put_object(Bucket=bucket_name, Key=pickle_key, Body=pickle_content)
                    print(f"Pickle file {pickle_key} uploaded to {bucket_name}/{target_prefix}")
                except ClientError as e:
                    print(f"Failed to upload pickle file {pickle_key} to {bucket_name}/{target_prefix}: {e}")

# Example usage
bucket_name = 'arthasai'  # Name of your S3 bucket
source_prefix = 'arxiv_markdown/'  # Source folder within the bucket containing .mmd files
target_prefix = 'arxiv_pickle/'  # Target folder within the same bucket for .pkl files


markdown_files_to_pickles(bucket_name, source_prefix, target_prefix, s3_client)






mmd_prefix = "arxiv_markdown/"
output_directory = 'arxiv_pickle/'

def clean_jsonl_file(file_path: str):
    """
    Reads a .jsonl file, removes all newline characters within JSON strings, 
    replaces instances of '\eq' with '\eq', and writes the contents back to the file.

    Parameters:
    - file_path (str): The path to the .jsonl file.
    """
    try:
        # Read the content of the file
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Remove newline characters within JSON strings and replace \eq with \\eq
        updated_content = content.replace("\\n", "").replace("\\eq", "\\\\eq")
        
        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)

        print(f"File cleaned and saved to {file_path}")
    except Exception as e:
        raise Exception(f"Error occurred during file cleaning: {e}")

"""# Run the cleaning function
#clean_jsonl_file(local_combined_file_path)

# Read the content of the first line of the file
with open('combined.jsonl', 'r', encoding='utf-8') as file:
    first_line = file.readline().strip()

# Check if the first line is a valid JSON
try:
    json_object = json.loads(first_line)
    print("First line is valid JSON:", json_object)
except json.JSONDecodeError as e:
    print("First line is not valid JSON:", e)

# If it's not valid, you'll need to investigate the contents and structure of your file
# and correct any issues to ensure each line is a valid JSON object.
"""

#resp = together.Files.check(file="test.jsonl")



#together.Files.upload(file="test.jsonl")

"""resp = together.Files.upload(file="test.jsonl")
file_id = resp["id"]
print(resp["id"])"""

"""#file-cf5c3d5a-7fa6-458d-8074-5804156bf986

resp = together.Finetune.create(
  training_file = 'file-cf5c3d5a-7fa6-458d-8074-5804156bf986',
  model = 'togethercomputer/RedPajama-INCITE-Chat-3B-v1',
  n_epochs = 3,
  n_checkpoints = 1,
  batch_size = 4,
  learning_rate = 1e-5,
  suffix = 'my-demo-finetune',
  wandb_api_key = '80a8015a25a92f787f20580e2ddc73d6a835ce9a',
)

fine_tune_id = resp['id']
print(fine_tune_id)

print(together.Finetune.retrieve(fine_tune_id=fine_tune_id)) # retrieves information on finetune event
print(together.Finetune.get_job_status(fine_tune_id=fine_tune_id)) # pending, running, completed
print(together.Finetune.is_final_model_available(fine_tune_id=fine_tune_id)) # True, False
print(together.Finetune.get_checkpoints(fine_tune_id=fine_tune_id)) # list of checkpoints"""

import boto3
from botocore.exceptions import NoCredentialsError, ClientError

def check_s3_access(bucket_name: str, prefix: str):
    """
    Checks if access to an S3 bucket and prefix is available.

    Parameters:
    - bucket_name (str): The name of the S3 bucket.
    - prefix (str): The prefix under which the objects are stored.
    """
    # Instantiate the S3 client
    
    try:
        # Attempt to list objects in the specified bucket and prefix
        response = s3_client.list_objects_v2(Bucket=bucket_name, Prefix=prefix)
        if 'Contents' in response:
            print(f"Access to the bucket '{bucket_name}' with prefix '{prefix}' is confirmed.")
            print(f"Number of objects: {len(response['Contents'])}")
        else:
            print(f"No objects found in bucket '{bucket_name}' with prefix '{prefix}'.")
    except NoCredentialsError:
        print("Credentials not available to access S3.")
    except ClientError as e:
        # This could be a permissions error or a missing bucket error
        print(f"An error occurred: {e}")

# Example usage

#check_s3_access(Bucket, jsonl_prefix)
