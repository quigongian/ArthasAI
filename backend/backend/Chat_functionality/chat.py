from fastapi import APIRouter, Depends
from dependencies import get_s3_client, get_together_client
from models.chat_models import ChatInput

import together
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
together.api_key = os.getenv("TOGETHER_API_KEY")

together_OPENAI_Client = OpenAI(api_key=together.api_key,
                                    base_url='https://api.together.xyz/v1',)

def answer_question(context, question):
        # Apply the chat template for the context and question
        messages=[
              {"role": "user", "content": f"Given Context: {context} Give the best full answer amongst the option to question {question}"}
        ]
        
        chat_completion = together_OPENAI_Client.chat.completions.create(
                            messages=messages,
                            temperature=0.7,
                            top_p=0.95,
                            model="mistralai/Mixtral-8x7B-Instruct-v0.1")

        # Extracting and returning the generated answer
        answer = chat_completion.choices[0].message.content
        return answer

