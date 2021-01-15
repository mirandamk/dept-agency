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
      <div className="search-bar__text">Show me</div>
      <select
        className="search-bar__select"
        onChange={(data) => onSelectChange(data)}
      >
        <option className="search-bar__value" value="" hidden>
          all industries
        </option>
        <option className="search-bar__value" value="Retail">
          Retail
        </option>
        <option className="search-bar__value" value="Banking">
          Banking
        </option>
        <option className="search-bar__value" value="Technology">
          Technology
        </option>
        <option className="search-bar__value" value="Public sector">
          Public sector
        </option>
        <option className="search-bar__value" value="Tourism">
          Tourism
        </option>
        <option className="search-bar__value" value="Retail">
          Retail
        </option>
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
