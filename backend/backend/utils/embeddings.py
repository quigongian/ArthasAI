from typing import List
import together

client = together.Together()

def get_embeddings(texts: List[str], model: str) -> List[List[float]]:
    texts = [text.replace("\n", " ") for text in texts]
    outputs = client.embeddings.create(input = texts, model=model)
    return [outputs.data[i].embedding for i in range(len(texts))]