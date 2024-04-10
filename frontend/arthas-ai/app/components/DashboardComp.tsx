import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { Folder, Search, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Article, Collection } from "../dashboard/Types/Type";
import AddToCollectionsPopover from "./AddToCollectionsPopover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import CollectionsDialog from "./CollectionDialog";

function formatDateTime(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString("en-US", options);
}

export default function DashboardComp() {
  const fetcher = useQuery({
    queryKey: [`/dashboard/api/test`],
    queryFn: async () => {
      const response = await fetch(`/dashboard/api/test`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data); // Log the API response
      return data;
    },
  });

  const isLoading = fetcher.isLoading;
  const isError = fetcher.isError;
  const data = fetcher.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading recently viewed documents</div>;
  }

  const recentlyViewedDocs = data.data || [];

  interface Document {
    id: string;
    document_title: string;
    created_at: string;
    last_modified: string;
  }

  // Popover functionality
  // Dummy data for AddToCollectionsPopover
  const collections: Collection[] = [
    { id: "1", name: "Collection 1" },
    { id: "2", name: "Collection 2" },
    { id: "3", name: "Collection 3" },
    { id: "4", name: "Collection 4" },
  ];

  const articles: Article[] = [
    { id: "1", title: "Article 1" },
    { id: "2", title: "Article 2" },
    { id: "3", title: "Article 3" },
    { id: "4", title: "Article 4" },
    { id: "5", title: "Article 5" },
  ];

  const handleAddToCollection = (collectionId: string, articleId: string) => {
    console.log(`Adding article ${articleId} to collection ${collectionId}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-card">
      <div className=" top-0 flex h-[120px] items-center border-b px-8 md:px-14">
        {/* Title */}
        <div className="hidden flex-col  text-lg font-medium md:flex md:flex-row">
          <h1 className=" text-3xl text-foreground transition-colors">
            {" "}
            Dashboard{" "}
          </h1>
        </div>
        {/* Search Bar */}
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-accent" />
              <Input
                type="search"
                placeholder="Search Documents, Collections..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[450px] rounded-full border-accent !placeholder-accent text-accent bg-card "
              />
            </div>
          </form>
        </div>
      </div>
      {/* Header End */}

      <div className="flex flex-1 flex-col px-8 gap-4 md:gap-8 bg-gray-50 !bg-background">
        <div className="flex flex-col gap-2 pb-4">
          {/* Doc Section Start */}
          <div className="bg-card border rounded mt-10">
            <CardHeader>
              <CardTitle className="text-[20px] font-medium">
                Recently Viewed Docs
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-6">
              {recentlyViewedDocs.map((doc: Document) => (
                <Card
                  key={doc.id}
                  className="flex flex-col justify-start border h-60 bg-gray-200"
                >
                  <CardHeader className="flex-row gap-4">
                    <CardTitle className="text-large font-medium">
                      {doc.document_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full">
                    <div className="flex flex-col justify-end">
                      <p>Last Modified: {formatDateTime(doc.last_modified)}</p>
                      <p>Created At: {formatDateTime(doc.created_at)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </div>{" "}
          {/* Docs Section End */}
          {/* Collection Section Start*/}
          <div className="xl:col-span-2 bg-card border rounded mt-10">
            <CardHeader className="flex flex-row items-center">
              <div className="flex">
                <CardTitle className="text-[20px] font-medium mr-16">
                  Collections
                </CardTitle>

                {/* Popover Feature */}
                <AddToCollectionsPopover
                  collections={collections}
                  articles={articles}
                  onAddToCollection={handleAddToCollection}
                />
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-6">
              {collections.map((collection) => (
                <Dialog key={collection.id}>
                  <DialogTrigger>
                    <Card className="flex flex-col justify-center items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-200 dark:text-gray-800">
                      <CardHeader className="flex-row items-center gap-2 ">
                        <Folder className="h-5 stroke-[3px] " />
                        <CardTitle className="text-lg font-medium">
                          {collection.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogOverlay className="fixed inset-0 bg-black/60" />
                  {/* Render dialog content */}
                  <CollectionsDialog articles={articles} />
                </Dialog>
              ))}
            </CardContent>
          </div>
          {/* Collection Section End*/}
        </div>
      </div>
    </div>
  );
}
