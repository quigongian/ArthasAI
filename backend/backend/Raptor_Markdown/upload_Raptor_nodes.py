import os
import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import boto3
from botocore.exceptions import ClientError
from Chat_functionality.dependencies import get_s3_client
import pickle

from Raptor import run

def run_for_all_files(bucket_name, folder_prefix, s3_client):
    paginator = s3_client.get_paginator('list_objects_v2')
    output_folder = 'raptorized-files/'

    # Loop through all files in the S3 bucket
    for page in paginator.paginate(Bucket=bucket_name, Prefix=folder_prefix):
        for obj in page.get('Contents', []):
            key = obj['Key']
            if key.endswith('.mmd'):
                try:
                    # Load the markdown content from S3
                    response = s3_client.get_object(Bucket=bucket_name, Key=key)
                    text = response['Body'].read().decode('utf-8')
                    file_name = key.split('/')[-1].replace('.mmd', '')

                    # RAPTORIZE and pickle the Retrieval Augmentation
                    RA = run(document_id=file_name, text=text)
                    tree_data = RA.tree  # Assuming RA.tree contains the data structure we want to pickle
                    pickle_data = pickle.dumps(tree_data)

                    # Save the pickle data back to S3
                    s3_client.put_object(Bucket=bucket_name, Key=f'{output_folder}{file_name}_Tree.pkl', Body=pickle_data)
                    print(f'Raptorized and pickled file saved for {key}')

                except ClientError as e:
                    print(f"Failed to process file {key}: {e.response['Error']['Message']}")

bucket_name = 'arthasai'
folder_prefix = 'arxiv_markdown/'
s3_client = get_s3_client()
run_for_all_files(bucket_name, folder_prefix, s3_client)