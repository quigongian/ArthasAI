import os
from neo4j import GraphDatabase
from dotenv import load_dotenv

load_dotenv()

driver =  GraphDatabase.driver(os.getenv("NEO4J_URI"), auth=(os.getenv("NEO4J_USER"), os.getenv("NEO4J_PASSWORD")))