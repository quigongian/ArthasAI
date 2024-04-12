"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Folder } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Document, Collection } from "../dashboard/Types/Type";
import AddToCollectionsPopover from "./AddToCollectionsPopover";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import CollectionsDialog from "./CollectionDialog";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton"


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
  const [selectedCollectionDocs, setSelectedCollectionDocs] = useState<
    Document[]
  >([]);

  const router = useRouter();

  const recentDocsFetcher = useQuery({
    queryKey: [`/dashboard/api/test/recentdocs`],
    queryFn: async () => {
      const response = await fetch(`/dashboard/api/test/recentdocs`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data); // Log the API response
      return data;
    },
  });

  const collectionFetcher = useQuery({
    queryKey: [`/dashboard/api/test/collections`],
    queryFn: async () => {
      const response = await fetch(`/dashboard/api/test/collections`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data); // Log the API response
      return data;
    },
  });

  const isLoadingRecentDocs = recentDocsFetcher.isLoading;
  const isErrorRecentDocs = recentDocsFetcher.isError;
  const recentDocsData = recentDocsFetcher.data;

  const isLoadingCollections = collectionFetcher.isLoading;
  const isErrorCollections = collectionFetcher.isError;
  const collectionsData = collectionFetcher.data;

  // Combine loading and error states for both fetchers
  const isLoading = isLoadingRecentDocs || isLoadingCollections;
  const isError = isErrorRecentDocs || isErrorCollections;

  if (isLoading) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
  }

  if (isError) {
    return <div>Error loading...</div>;
  }

  const recentlyViewedDocs = recentDocsData.data || [];
  const collections = collectionsData.data || [];

  const handleAddToCollection = (collectionId: string, articleId: string) => {
    console.log(`Adding article ${articleId} to collection ${collectionId}`);
  };

  const handleClick = (documentId: Document) => {
    // Prefetch the document page so that it loads faster
    router.prefetch(`/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc`);
    // Redirect the user to the document page
    router.push(`/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-card">
      <div className=" top-0 flex h-[120px] items-center border-b px-8 md:px-14">
        {/* Title */}
        <div className="hidden flex-col text-lg font-medium md:flex md:flex-row">
          <h1 className=" text-3xl text-foreground transition-colors">
            {" "}
            Dashboard{" "}
          </h1>
        </div>
        {/* Search Bar - Commented */}
        {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
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
        </div> */}
      </div>
      {/* Header End */}

      <div className="flex flex-1 flex-col px-8 gap-4 md:gap-8 bg-gray-50 !bg-background">
        <div className="flex flex-col gap-2 pb-4">
          {/* Doc Section Start */}
          <div className="bg-card border rounded mt-10">
            <CardHeader>
              <CardTitle className="text-[20px] font-medium ">
                Recently Viewed Docs
              </CardTitle>
            </CardHeader>
            <CardContent className="flex overflow-x-auto space-x-4 h-70">
              <div className="flex flex-nowrap">
                {recentlyViewedDocs.map((doc: Document) => (
                  <div key={doc.id} onClick={() => handleClick(doc)}>
                    <Card className="cursor-pointer flex flex-col justify-start border h-60 bg-background hover:bg-accent hover:text-accent-foreground w-60 mr-4">
                      <CardHeader className="flex-row gap-4">
                        <CardTitle className="text-base font-bold dark:text-foreground">
                          {doc.document_title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-end h-full">
                        <div className="flex flex-col justify-start dark:text-foreground">
                          <p>
                            Last Modified: {formatDateTime(doc.last_modified)}
                          </p>
                          <p>Created At: {formatDateTime(doc.created_at)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
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
                  docs={recentlyViewedDocs}
                  onAddToCollection={handleAddToCollection}
                  setSelectedCollectionDocs={setSelectedCollectionDocs} // Pass the setter function
                />
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-6">
              {collections.map((collection: Collection) => (
                <Dialog key={collection.id}>
                  <DialogTrigger>
                    <Card className="flex flex-col justify-center items-center bg-background hover:bg-accent hover:text-accent-foreground">
                      <CardHeader className="flex-row items-center gap-2 ">
                        <Folder className="h-5 stroke-[3px] " />
                        <CardTitle className="text-lg font-medium">
                          {collection.collection_name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogOverlay className="fixed inset-0 bg-black/60" />
                  {/* Render dialog content */}
                  <CollectionsDialog selectedDocs={recentlyViewedDocs} />
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
