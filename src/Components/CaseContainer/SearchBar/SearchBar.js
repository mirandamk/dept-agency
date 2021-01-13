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

function SearchBar({
  selectedIndustry,
  handleIndustryInputChange,
  clearFilter,
  onUpdateFilter,
  industry
}) {
  const [industryFilter, setIndustryFilter] = useState();

  const onSelectChange = (e) => {
    handleIndustryInputChange(e.target.name, e.target.value);
    console.log('send data', e.target.name, e.target.value)
  };

  const handleClearFilterClicked = () => {
    clearFilter();
    setIndustryFilter("");
    console.log("clear from search");
  };
  // let industry;

  // function sendIndustryFilter() {
  //   industry = industryFilter;
  // }

  console.log(industryFilter);

  // console.log(selectedIndustry);

  return (
    <div className="search-bar">
      <div className="search-bar__text"></div>
      <select
        className="search-bar__select"
        onChange={(data) => onSelectChange(data)}

        // onChange={(e) => {
        //   const selectedIndustry = e.target.value;
        //   setIndustryFilter(selectedIndustry);
        //   sendIndustryFilter();
        // }}
      >
        <option value="" disabled selected>
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

SearchBar.propTypes = {};

export default SearchBar;
