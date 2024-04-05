"use client";
import React from "react";
import Pagetab from "./Pagetab";
import { Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchResultsProps {
  title: string;
  abstract: string
}


const SearchResults: React.FC<SearchResultsProps> = ({
  title,
  abstract
}) => {
  return (
    <div>
      {/* <Pagetab/> */}

      {/*Header*/}
      <div>
        {/* Search Bar */}
        <div className="flex justify-center w-full items-center bg-white pt-8">
          <form className="bg-white w-full max-w-4xl p-2">
            <div className="relative">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-black" />
              <Input
                type="search"
                placeholder="What is AI?"
                className="pl-10 pr-4 py-3 rounded-lg w-full border border-black"
              />
            </div>
          </form>
        </div>

        {/* List of results */}
      </div>
      <div className="flex w-full justify-center pt-8 pb-10 bg-white">
        <div className="w-full max-w-4xl p-2 rounded-lg border border-gray-400 bg-white">
          <div className="divide-y divide-gray-200">
            <div className="pt-2 pb-2 pl-4">
                  <h3 className="text-xl font-medium text-black">
                    {title}
                  </h3>
                  <p className="text-gray-600 mt-1">{abstract}</p>
                  <div className="flex mt-3">
                    <button className="px-8 py-0 mr-8 text-gray-700 bg-gray-200 rounded-lg">
                      Edit
                    </button>
                    <button className="px-8 py-0 text-gray-700 bg-white border border-gray-300 rounded-lg">
                      Add
                    </button>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
