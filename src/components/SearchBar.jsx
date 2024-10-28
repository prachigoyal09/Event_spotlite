import React from "react";

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search events..."
    className="p-2 border border-gray-300 rounded-md w-full"
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
