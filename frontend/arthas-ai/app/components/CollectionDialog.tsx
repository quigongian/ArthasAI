import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Article } from "../dashboard/Types/Type";
import { useState } from "react";

interface CollectionsDialogProps {
  articles: Article[];
}

const CollectionsDialog: React.FC<CollectionsDialogProps> = ({ articles }) => {
  const [selectedArticles, setSelectedArticles] = useState<Article[]>([]);
  return (
    <DialogContent className="bg-gray-200 max-w-[425px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 DialogOverlay p-6">
      <DialogHeader>
        <DialogTitle>Articles</DialogTitle>
        <DialogDescription>Articles in your collection</DialogDescription>
      </DialogHeader>
      <div style={{ maxHeight: "350px", overflow: "auto" }}>
        <ul className="space-y-2">
          {articles.map((article) => (
            <li
              key={article.id}
              className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
                selectedArticles.includes(article) ? "bg-gray-100" : ""
              }`}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default CollectionsDialog;
