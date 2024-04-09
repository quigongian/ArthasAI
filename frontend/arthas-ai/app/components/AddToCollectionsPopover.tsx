"use client";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { PlusIcon } from "lucide-react";
import { Article, Collection } from "../dashboard/Types/Type";

interface AddToCollectionsPopoverProps {
  collections: Collection[];
  articles: Article[];
  onAddToCollection: (collectionId: string, articleId: string) => void;
}

const AddToCollectionsPopover: React.FC<AddToCollectionsPopoverProps> = ({
  collections,
  articles,
  onAddToCollection,
}) => {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const handleCollectionClick = (collection: Collection) => {
    setSelectedCollection(collection);
  };

  const handleAddToCollection = () => {
    if (selectedCollection && selectedArticles.length > 0) {
      selectedArticles.forEach((article) => {
        onAddToCollection(selectedCollection.id, article.id);
      });
      setSelectedArticles([]);
    }
  };

  const [selectedArticles, setSelectedArticles] = useState<Article[]>([]);

  const handleArticleClick = (article: Article) => {
    if (selectedArticles.includes(article)) {
      setSelectedArticles(selectedArticles.filter((a) => a.id !== article.id));
    } else {
      setSelectedArticles([...selectedArticles, article]);
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

        <PopoverContent className="w-[400px] p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div style={{ maxHeight: "350px", overflow: "auto" }}>
              <h3 className="text-lg font-medium mb-2">Collections</h3>
              <hr />
              <ul className="space-y-2">
                {collections.map((collection) => (
                  <li
                    key={collection.id}
                    className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
                      selectedCollection?.id === collection.id
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => handleCollectionClick(collection)}
                  >
                    {collection.name}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ maxHeight: "350px", overflow: "auto" }}>
              <h3 className="text-lg font-medium mb-2">Articles</h3>
              <hr />
              <ul className="space-y-2">
                {articles.map((article) => (
                  <li
                    key={article.id}
                    className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
                      selectedArticles.includes(article) ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleArticleClick(article)}
                  >
                    {article.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {selectedCollection && selectedArticles.length > 0 && (
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white rounded-md px-4 py-2"
              onClick={handleAddToCollection}
            >
              Add to {selectedCollection.name}
            </button>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AddToCollectionsPopover;
