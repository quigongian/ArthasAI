export interface Document {
  id: string;
  document_title: string;
  created_at: string;
  last_modified: string;
}

export interface Collection {
  id: string;
  owner_id: string;
  collection_name: string;
  created_at: string;
}