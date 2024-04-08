import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { Search, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function DashboardComp() {
  const fetcher = useQuery({
    queryKey: [`/dashboard/api/test`],
    queryFn: async () => {
		const response = await fetch(`/dashboard/api/test`);
		if (!response.ok) {
		  throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
 		console.log('API Response:', data); // Log the API response
 		return data;

	},
});

  const isLoading = fetcher.isLoading;
  const isError = fetcher.isError;
  const data = fetcher.data;
  if (!data) {
	return <div>Data Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error loading recently viewed documents</div>;
  }

  const recentlyViewedDocs  = data.data || [];

  interface Document {
	id: string;
	document_title: string;
	created_at: string;
	last_modified: string;
  }

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
                <Card key={doc.id} className="flex flex-col justify-start border-none h-60 bg-gray-200">
                  <CardHeader className="flex-row gap-4">
                    <CardTitle className="text-base font-medium">
                      {doc.document_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Last Modified: {doc.last_modified}</p>
                    <p>Created At: {doc.created_at}</p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </div>{" "}
          {/* Docs Section End */}
          {/* Collection Section Start*/}
          <div className="xl:col-span-2 bg-card border rounded mt-10">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="text-[20px] font-medium">
                  Collections
                </CardTitle>
                {/* <CardDescription>All your collections</CardDescription> */}
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-6">
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            </CardContent>
          </div>
          {/* Collection Section End*/}
        </div>
      </div>
    </div>
  );
}
