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
  docs: Document[];
}

interface Document {
  id: string;
  document_title: string;
}

const CollectionsDialog: React.FC<CollectionsDialogProps> = () => {
  const [selectedDocs, setSelectedDocs] = useState<Document[]>([]);
  const handleOpenDocs = () => {
    console.log("Opening selected documents:", selectedDocs);
  };

  return (
    <DialogContent className="bg-popover text-popover-accent max-w-[425px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 DialogOverlay p-6">
      <DialogHeader>
        <DialogTitle className="text-[color:var(--foreground)]">
          Documents
        </DialogTitle>
        <DialogDescription>Documents in your collection</DialogDescription>
      </DialogHeader>
      <div style={{ maxHeight: "350px", overflow: "auto" }}>
        <ul className="space-y-2">
          {selectedDocs.map((doc) => (
            <li
              key={doc.id}
              className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
                selectedDocs.includes(doc) ? "" : ""
              }`}
            >
              {doc.document_title}
            </li>
          ))}
        </ul>
      </div>
      <DialogFooter>
        <Button
          className="bg-accent text-accent-foreground hover:bg-[#1F7A2F] dark:hover:bg-[#E66C14]"
          type="submit"
          onClick={handleOpenDocs}
        >
          Add
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default CollectionsDialog;
