"use client";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { PlusIcon } from "lucide-react";
import { Document, Collection } from "../dashboard/Types/Type";
import { Button } from "@/components/ui/button";
import { SetStateAction } from 'react';
import { Dispatch } from 'react';



interface AddToCollectionsPopoverProps {
  collections: Collection[];
  docs: Document[];
  onAddToCollection: (collectionId: string, articleId: string) => void;
  setSelectedCollectionDocs: Dispatch<SetStateAction<Document[]>>; // Add this line
}

const AddToCollectionsPopover: React.FC<AddToCollectionsPopoverProps> = ({
  collections,
  docs,
  onAddToCollection,
}) => {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const handleCollectionClick = (collection: Collection) => {
    setSelectedCollection(collection);
    // Set selected documents for the selected collection
    setSelectedDocs(docs.filter(doc => doc.id === collection.id));
  };

  const handleAddToCollection = () => {
    if (selectedCollection && selectedDocs.length > 0) {
      selectedDocs.forEach((doc) => {
        onAddToCollection(selectedCollection.id, doc.id);
      });
      setSelectedDocs([]);
    }
  };

  const [selectedDocs, setSelectedDocs] = useState<Document[]>([]);

  const handleArticleClick = (doc: Document) => {
    if (selectedDocs.includes(doc)) {
      setSelectedDocs(selectedDocs.filter((a) => a.id !== doc.id));
    } else {
      setSelectedDocs([...selectedDocs, doc]);
    }
  };

  return (
    <div className="flex">
      <Popover>
        <PopoverTrigger>
          <button className="flex">
            <PlusIcon className="h-5" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-[400px] p-4 space-y-4 bg-popover text-popover-foreground">
          <div className="grid grid-cols-2 gap-4">
            <div style={{ maxHeight: "350px", overflow: "auto" }}>
              <h3 className="text-lg font-medium mb-2">Collections</h3>
              <hr />
              <ul className="space-y-2">
                {collections.map((collection) => (
                  <li
                    key={collection.id}
                    className={`cursor-pointer hover:bg-gray-100 hover:dark:text-gray-800  rounded-md mt-2 p-2 ${
                      selectedCollection?.id === collection.id
                        ? "bg-gray-200 text-gray-800"
                        : ""
                    }`}
                    onClick={() => handleCollectionClick(collection)}
                  >
                    {collection.collection_name}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ maxHeight: "350px", overflow: "auto" }}>
              <h3 className="text-lg font-medium mb-2">Articles</h3>
              <hr />
              <ul className="space-y-2">
                {docs.map((doc) => (
                  <li
                    key={doc.id}
                    className={`cursor-pointer hover:bg-gray-100 hover:dark:text-gray-800 rounded-md mt-2 p-2 ${
                      selectedDocs.includes(doc)
                        ? "bg-gray-200 text-gray-800"
                        : ""
                    }`}
                    onClick={() => handleArticleClick(doc)}
                  >
                    {doc.document_title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {selectedCollection && selectedDocs.length > 0 && (
            <Button
              className=" bg-accent hover:bg-accent text-accent-foreground hover:bg-[#1F7A2F] dark:hover:bg-[#E66C14]"
              onClick={handleAddToCollection}
            >
              Add to {selectedCollection.collection_name}
            </Button>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AddToCollectionsPopover;
