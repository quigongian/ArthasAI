"use client"

import React, { useState } from "react";
import SearchBar from "./SearchbarComp";
import SearchResults from "./Searchresults";
import { useQuery } from "@tanstack/react-query";


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  return (
    <div>
      {!searchSubmitted && (
        <SearchBar setSearchSubmitted={setSearchSubmitted} />
      )}
      {searchSubmitted &&

        <SearchResults/>
      }
    </div>
  );
}
export default SearchPage;
