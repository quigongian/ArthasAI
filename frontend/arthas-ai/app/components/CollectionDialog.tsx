import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Document } from "../dashboard/Types/Type";
import { useState } from "react";

interface CollectionsDialogProps {
  selectedDocs: Document[];
}

const CollectionsDialog: React.FC<CollectionsDialogProps> = ({ selectedDocs }) => {
  const handleOpenDocs = () => {
    console.log("Opening selected documents:", selectedDocs);
    // Implement your logic to open selected documents
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
          {selectedDocs.map((doc: Document) => (
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
    </DialogContent>
  );
};

export default CollectionsDialog;
