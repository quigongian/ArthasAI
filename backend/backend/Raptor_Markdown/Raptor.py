"""
We will handle the PDF to Markdown conversion in a different file.

This file will be used to handle the conversion of Markdown to the
RAPTOR embedding representation.

The RAPTOR embedding representation will be stored in Neo4j as a tree,
"""
import torch
from raptor import BaseSummarizationModel, BaseQAModel, BaseEmbeddingModel, RetrievalAugmentationConfig
from transformers import AutoTokenizer, pipeline, BitsAndBytesConfig, AutoModelForCausalLM
from raptor import RetrievalAugmentation
from sentence_transformers import SentenceTransformer

# if you want to use the Gemma, you will need to authenticate with HuggingFace, Skip this step, if you have the model already downloaded
# from huggingface_hub import login
# login()

from transformers import AutoTokenizer, pipeline
import torch

# You can define your own Summarization model by extending the base Summarization Class.
class MistralSummarizationModel(BaseSummarizationModel):
    def __init__(self, model_name="mistralai/Mistral-7B-Instruct-v0.1"):
        # Initialize the tokenizer and the pipeline for the Mistral model
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        # 4-bit Quantization configuration to reduce model size
        model_config = BitsAndBytesConfig(load_in_4bit=True,
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.bfloat16)

        # Load the model
        model = AutoModelForCausalLM.from_pretrained(model_name,
                quantization_config=model_config)

        self.summarization_pipeline = pipeline(
            "text-generation",
            model=model,
            tokenizer=self.tokenizer,
            model_kwargs={"torch_dtype": torch.bfloat16},
            # device=torch.device('cuda' if torch.cuda.is_available() else 'cpu'),  # Use "cpu" if CUDA is not available
        )

    def summarize(self, context, max_tokens=150):
        # Format the prompt for summarization
        messages=[
            {"role": "user", "content": f"Write a summary of the following, including as many key details as possible: {context}:"}
        ]

        prompt = self.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)

        # Generate the summary using the pipeline
        outputs = self.summarization_pipeline(
            prompt,
            max_new_tokens=max_tokens,
            do_sample=True,
            temperature=0.7,
            top_k=50,
            top_p=0.95
        )

        # Extracting and returning the generated summary
        summary = outputs[0]["generated_text"].strip()
        # print(summary)
        return summary

class MistralQAModel(BaseQAModel):
    def __init__(self, model_name= "mistralai/Mistral-7B-Instruct-v0.1"):
        # Initialize the tokenizer and the pipeline for the model
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        # 4-bit Quantization configuration to reduce model size
        model_config = BitsAndBytesConfig(load_in_4bit=True,
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.bfloat16)

        # Load the model
        model = AutoModelForCausalLM.from_pretrained(model_name,
                quantization_config=model_config)

        self.qa_pipeline = pipeline(
            "text-generation",
            model=model,
            tokenizer=self.tokenizer,
            model_kwargs={"torch_dtype": torch.bfloat16},
            # device=torch.device('cuda' if torch.cuda.is_available() else 'cpu'),
        )

    def answer_question(self, context, question):
        # Apply the chat template for the context and question
        messages=[
              {"role": "user", "content": f"Given Context: {context} Give the best full answer amongst the option to question {question}"}
        ]
        prompt = self.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)

        # Generate the answer using the pipeline
        outputs = self.qa_pipeline(
            prompt,
            max_new_tokens=256,
            do_sample=True,
            temperature=0.7,
            top_k=50,
            top_p=0.95
        )

        # Extracting and returning the generated answer
        answer = outputs[0]["generated_text"][len(prompt):]
        return answer

class M2BertEmbeddingModel(BaseEmbeddingModel):
    def __init__(self, model_name="togethercomputer/m2-bert-80M-8k-retrieval"):
        self.model = SentenceTransformer(model_name, trust_remote_code=True)

    def create_embedding(self, text):
        return self.model.encode(text)


def load_markdown_to_txt(markdown_file_path: str):
    with open(markdown_file_path, 'r') as file:
        text: str = file.read()
    return text


# Load tree from pickle file
def load_tree(tree_path: str):
    RA = RetrievalAugmentation(tree=tree_path)
    return RA


def run():
    RAC = RetrievalAugmentationConfig(summarization_model=MistralSummarizationModel(), qa_model=MistralQAModel(), embedding_model=M2BertEmbeddingModel())
    # Define the configuration for the Retrieval Augmentation
    RA = RetrievalAugmentation(config=RAC)

    text = load_markdown_to_txt("Attention_is_All_You_Need.md")

    RA.add_documents(text)

    question = "What is this research paper about?"

    answer = RA.answer_question(question=question)

    print("Answer: ", answer)

    RA.save("Attention_is_All_You_Need_Tree")


def load_tree(tree_path: str, config: RetrievalAugmentationConfig):
    RA = RetrievalAugmentation(config=config, tree=tree_path)
    return RA

def test(tree_file_path: str, RA: RetrievalAugmentation):
    question = input("Enter a question: \n")

    while(question != "exit"):
        answer = RA.answer_question(question=question)
        print("Answer: ", answer)
        question = input("Enter a question: \n")


if "__main__" == __name__:
    run()