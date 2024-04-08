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


  // empty array to store titles and abstracts
  let titles: string[] = []; 
  let abstracts: string[] = [];


  // Correctly destructure the nested data
  Object.keys(data.data).forEach(key => {
    // if title and abstract exist 
    if(data.data[key].Title && data.data[key].Abstract) {
      titles.push(data.data[key].Title); // push title to array
      abstracts.push(data.data[key].Abstract);
    }
  });

  // let title: any[] = [];
  // let abstract: any[] = [];
  // let num = 0;

  // Object.keys(data.data).forEach(key => {
  //   title.push(data.data[key].Title);
  //   abstract = [data.data[key].Abstract];
  //   num++;
  //   // console.log(`Key: ${key}, Value: ${value}`);
  // });

  return (
    <div>
      {!searchSubmitted && (
        <SearchBar setSearchSubmitted={setSearchSubmitted} />
      )}
      {searchSubmitted &&

        <SearchResults titles={titles} abstracts={abstracts} />
      }
    </div>
  );
}
export default SearchPage;
