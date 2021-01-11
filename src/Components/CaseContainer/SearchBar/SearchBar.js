import React, {useState} from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const industries = [
    {value: 1, label: 'Retail'},
    {value: 2, label: 'Banking'},
    {value: 3, label: 'Technology'},
    {value: 4, label: 'Public sector'},
    {value: 5, label: 'Tourism'}
]

function SearchBar({industry, handleIndustryInputChange}) {

  return (
    <>
      <Select
        placeholder="All industries"
        options={industries}
        className=""
        value={industry}
        onChange={handleIndustryInputChange}
      />
    </>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
