import React from "react";
import PropTypes from "prop-types";

import "./SearchBar.css";

function SearchBar({ handleIndustryInputChange, clearFilter }) {

  const onSelectChange = (e) => {
    handleIndustryInputChange(e.target.name, e.target.value);
  };

  const handleClearFilterClicked = () => {
    clearFilter();
  };

  return (
    <div className="search-bar">
      <div className="search-bar__text"></div>
      <select
        className="search-bar__select"
        onChange={(data) => onSelectChange(data)}
      >
        <option value="" disabled>
          Select your option
        </option>
        <option value="Retail">Retail</option>
        <option value="Banking">Banking</option>
        <option value="Technology">Technology</option>
        <option value="Public sector">Public sector</option>
        <option value="Tourism">Tourism</option>
        <option value="Retail">Retail</option>
      </select>
      <button
        className="search-bar__clear-btn"
        onClick={handleClearFilterClicked}
      >
        x
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  handleIndustryInputChange: PropTypes.func,
  clearFilter: PropTypes.func,
};

export default SearchBar;
