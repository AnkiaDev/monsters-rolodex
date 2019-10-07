import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({placeholder, searchChange}) => (
  <div>
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={searchChange}
    />
  </div>
);
