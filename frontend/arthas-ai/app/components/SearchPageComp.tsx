"use client"

import React, { useState } from "react";
import SearchBar from "./SearchbarComp";
import SearchResults from "./Searchresults";
import { useQuery } from "@tanstack/react-query";


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: [`/dashboard/api/test`],
    queryFn: async () => {
      const response = await fetch(`/dashboard/api/test`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  if (isError) {
    return <div>Error loading data</div>; // Or any error handling you prefer
  }

  // Correctly destructure the nested data

  let title: any[] = [];
  let abstract: any[] = [];
  let num = 0;

  Object.keys(data.data).forEach(key => {
    title.push(data.data[key].Title);
    abstract = [data.data[key].Abstract];
    num++;
    // console.log(`Key: ${key}, Value: ${value}`);
  });



  // Define a type for 
  type Results = {
    title: string,
    abstract: string
  };


  return (
    <div>
      {!searchSubmitted && (
        <SearchBar setSearchSubmitted={setSearchSubmitted} />
      )}
      {searchSubmitted &&

        <SearchResults title={title[0]} abstract={abstract[0]} />
      }
    </div>
  );
}
export default SearchPage;
