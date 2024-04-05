from dotenv import load_dotenv
from neo4j import GraphDatabase

driver =  GraphDatabase.driver(load_dotenv("NEO4J_URI"), auth=(load_dotenv("NEO4J_USER"), load_dotenv("NEO4J_PASSWORD")))