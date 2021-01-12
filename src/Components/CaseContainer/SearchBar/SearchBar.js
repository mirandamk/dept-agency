import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import "./SearchBar.css";

const industries = [
  { value: 1, label: "Retail" },
  { value: 2, label: "Banking" },
  { value: 3, label: "Technology" },
  { value: 4, label: "Public sector" },
  { value: 5, label: "Tourism" },
];

function SearchBar({ industry, handleIndustryInputChange, clearFilter }) {
  const selectInputRefIndustry = useRef();

  const handleClearFilterClicked = () => {
    clearFilter();
    selectInputRefIndustry.current.select.clearValue();
    console.log( 'clear from search')
  };

  return (
    <div className="search-bar">
      <div className="search-bar__text"></div>
      <Select
        ref={selectInputRefIndustry}
        placeholder="all industries"
        className="search-bar__input"
        options={industries}
        defaultValue={industry}
        onChange={handleIndustryInputChange}
      />
      <button
        className="search-bar__clear-btn"
        onClick={handleClearFilterClicked}
      > x </button>
    </div>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
