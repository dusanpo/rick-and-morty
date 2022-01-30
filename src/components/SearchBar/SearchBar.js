import React from "react";
import "./SearchBar.css";

function SearchBar({ filterCards }) {
  return (
    <div>
      <input
        type="text"
        className="search-box"
        placeholder="Search characters..."
        onInput={filterCards}
      />
    </div>
  );
}

export default SearchBar;
