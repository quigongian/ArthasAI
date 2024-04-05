import React, { useState } from "react";
import SearchBar from "./SearchbarComp";
import Results from "./Searchresults";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  return (
    <div>
      {!searchSubmitted && (
        <SearchBar setSearchSubmitted={setSearchSubmitted} />
      )}
      {searchSubmitted && <Results />}
    </div>
  );
}
