"use client"

import React, { useState } from "react";
import SearchBar from "./SearchbarComp";
import SearchResults from "./Searchresults";
import { useQuery } from "@tanstack/react-query";


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const {data, isLoading, isError} = useQuery({
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

  let title, abstract;

  for(let i = 0; i < Object.keys(data.data).length; i++){
    let temp = ""
    title = data.data.i.title;
    abstract  = data.data.i.abstract;
  }



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
      {searchSubmitted && <SearchResults title={title} abstract={abstract}/>}
    </div>
  );
}
export default SearchPage;
