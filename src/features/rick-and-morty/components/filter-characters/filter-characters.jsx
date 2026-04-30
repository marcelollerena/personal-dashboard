import { Search } from "lucide-react";
import React from "react";

export const FilterCharacters = ({ search, setSearch, setPage }) => {
  return (
    <div className="bg-white/10 p-3 rounded-lg flex gap-2">
      <Search />
      <input
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search a character..."
        className="w-full focus:outline-white/50 focus:outline-none px-4"
      />
    </div>
  );
};
