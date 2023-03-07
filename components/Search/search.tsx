import React from "react";
import "./search.scss";

const Search: React.FC = () => {
  return (
    <div className="maxw">
      <div className="search-container">
        <h2>
          <span>My</span>News
        </h2>
        <input type="text" placeholder="Search news" name="search" />
        <button className="search-button">SEARCH</button>
      </div>
    </div>
  );
};

export default Search;
