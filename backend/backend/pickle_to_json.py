from dotenv import load_dotenv
import os, sys, inspect
from config import Settings
from dependencies import get_s3_client, get_together_client
from typing import List
import json
import together

together.api_key = get_together_client()
