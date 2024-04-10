"""
We will handle the PDF to Markdown conversion in a different file.

This file will be used to handle the conversion of Markdown to the
RAPTOR embedding representation.

The RAPTOR embedding representation will be stored in Neo4j as a tree,
"""
import sys
sys.path.append("Raptor_Markdown")
from Raptor_Markdown.raptor.SummarizationModels import BaseSummarizationModel 
from Raptor_Markdown.raptor.QAModels import BaseQAModel
from Raptor_Markdown.raptor.EmbeddingModels import BaseEmbeddingModel
from Raptor_Markdown.raptor.RetrievalAugmentation import RetrievalAugmentationConfig, RetrievalAugmentation

"""from raptor.SummarizationModels import BaseSummarizationModel
from raptor.QAModels import BaseQAModel
from raptor.EmbeddingModels import BaseEmbeddingModel
from raptor.RetrievalAugmentation import RetrievalAugmentationConfig, RetrievalAugmentation"""
import together
from typing import List
import os

from dotenv import load_dotenv
from openai import OpenAI

#from Chat_functionality.config import Settings

"""
import sys
sys.path.insert(0, 'D:/coding/ArthasAI/ArthasAI/backend/backend')

from Chat_functionality.config import Settings"""

# if you want to use the Gemma, you will need to authenticate with HuggingFace, Skip this step, if you have the model already downloaded
# from huggingface_hub import login
# login()

load_dotenv()
together.api_key = os.getenv("TOGETHER_API_KEY")

# You can define your own Summarization model by extending the base Summarization Class.
class MistralSummarizationModel(BaseSummarizationModel):
    def __init__(self, model_name="mistralai/Mistral-7B-Instruct-v0.1"):
      self.together_OPENAI_Client = OpenAI(api_key=together.api_key,
                                    base_url='https://api.together.xyz/v1',)

    def summarize(self, context, max_tokens=150):
        # Format the prompt for summarization
        messages=[
            {"role": "user", "content": f"Write a summary of the following, including as many key details as possible: {context}:"}
        ]

        chat_completion = self.together_OPENAI_Client.chat.completions.create(
                            messages=messages,
                            max_tokens=max_tokens,
                            temperature=0.7,
                            top_p=0.95,
                            model="mistralai/Mixtral-8x7B-Instruct-v0.1")

        summary = chat_completion.choices[0].message.content
        
        return summary
    

class MistralQAModel(BaseQAModel):
    def __init__(self, model_name="mistralai/Mistral-7B-Instruct-v0.1"):
        self.together_OPENAI_Client = OpenAI(api_key=together.api_key,
                                    base_url='https://api.together.xyz/v1',)

    def answer_question(self, context, question):
        # Apply the chat template for the context and question
        messages=[
              {"role": "user", "content": f"Given Context: {context} Give the best full answer amongst the option to question {question}"}
        ]
        
        chat_completion = self.together_OPENAI_Client.chat.completions.create(
                            messages=messages,
                            temperature=0.7,
                            top_p=0.95,
                            model="mistralai/Mixtral-8x7B-Instruct-v0.1")

        # Extracting and returning the generated answer
        answer = chat_completion.choices[0].message.content
        return answer
    

class M2BertEmbeddingModel(BaseEmbeddingModel):
    def __init__(self, model_name="togethercomputer/m2-bert-80M-8k-retrieval"):
        self.client = together.Together()
        self.model_name = model_name

    def get_embeddings(self, texts: List[str], model: str = "togethercomputer/m2-bert-80M-8k-retrieval") -> List[List[float]]:
        if model is None:
            model = self.model_name

        # Ensure texts are not null, not empty, and stripped of whitespace
        valid_texts = [text.strip() for text in texts if text and text.strip()]
        # Check if there's any valid text to process to avoid API error
        if not valid_texts:
            print("No valid texts to process: ", texts)
            return []

        texts = [text.replace("\n", " ") for text in texts]

        outputs = self.client.embeddings.create(input = texts, model=model)
        return [outputs.data[i].embedding for i in range(len(texts))]
    

    def example_use(self):
        input_texts = ['Our solar system orbits the Milky Way galaxy at about 515,000 mph']
        embeddings = self.get_embeddings(input_texts, model='togethercomputer/m2-bert-80M-8k-retrieval')


    def create_embedding(self, text: str) -> List[float]:
        # Ensure single text is not null or empty, then proceed
        if not text or not text.strip():
            print("Invalid or empty text provided: ", text)
            return []
        embeddings = self.get_embeddings([text.strip()], model=self.model_name)
        # Assuming embeddings is a list of lists, return the first item
        # print("New embedding of length: ", len(embeddings[0]), " for text: ", text)
        return embeddings[0] if embeddings else []


def load_markdown_to_txt(markdown_file_path: str):
    with open(markdown_file_path, 'r') as file:
        text: str = file.read()
    return text


def run(document_id: str, path: str = "", text: str = None):
    # Define the configuration for the Retrieval Augmentation
    RAC = RetrievalAugmentationConfig(summarization_model=MistralSummarizationModel(), qa_model=MistralQAModel(), embedding_model=M2BertEmbeddingModel())
    RA = RetrievalAugmentation(config=RAC)

    if text is None and path != "":
        text = load_markdown_to_txt(path)
    else:
        text = text

    RA.add_documents(text)

    RA.save(os.path.join(os.getcwd(), "raptor_trees", document_id + "_Tree"))

    RA.tree

    return RA




def load_tree(tree_path: str, config: RetrievalAugmentationConfig):
    if config is None:
        RAConfig = RetrievalAugmentationConfig(summarization_model=MistralSummarizationModel(), 
                                          qa_model=MistralQAModel(), 
                                          embedding_model=M2BertEmbeddingModel())
        RA_loaded = RetrievalAugmentation(config=RAConfig, tree=tree_path)
    else: 
       RA_loaded = RetrievalAugmentation(config=config, tree=tree_path)

    return RA_loaded


def retrieve_context(document_id: str, question: str):
    tree_file_path = os.path.join(os.getcwd(), "Raptor_Markdown", "Arxiv Markdown 0102027_Tree")
    RA = load_tree(tree_path=tree_file_path, config=None)
    context = RA.retriever.retrieve(query=question)
    return context


def answer_question(tree_file_path: str, RA: RetrievalAugmentation, context: str, question: str):
    answer = RA.answer_question(question=question)
    return answer


def test(tree_file_path: str, RA: RetrievalAugmentation):
    question = input("Enter a question: \n")

    while(question != "exit"):
        answer = RA.answer_question(question=question)
        print("Answer: ", answer)
        question = input("Enter a question: \n")


# if "__main__" == __name__:
    # run()
    # test("Gene_Paper_Tree", RA=load_tree("Gene_Paper_Tree", 
    #                                      RetrievalAugmentationConfig(summarization_model=MistralSummarizationModel(), 
    #                                      qa_model=MistralQAModel(), 
    #                                      embedding_model=M2BertEmbeddingModel())))

