import React from "react";

function Search() {
  return (
    <input
      className="px-2 py-1 border border-gray-200 rounded-lg h-8 focus:border-gray-400 outline-none"
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Search"
    />
  );
}

export default Search;
