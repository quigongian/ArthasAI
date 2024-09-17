CALL db.index.vector.createNodeIndex('abstract_embedding_index', 'Paper', 'abstract_embedding', 768, 'cosine')

-- Create unique constraints on all of the identifiers
CREATE CONSTRAINT ON (p:Paper) ASSERT p.id IS UNIQUE
CREATE CONSTRAINT ON (w:Workspace) ASSERT w.id IS UNIQUE
CREATE CONSTRAINT ON (u:User) ASSERT u.id IS UNIQUE

-- Create some seeding data
CREATE (u:User { id: 'user1', name: 'User 1' })
