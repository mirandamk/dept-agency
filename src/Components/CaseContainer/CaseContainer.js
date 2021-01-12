import React, { useState, useEffect } from "react";
import axios from "axios";
import RegularCaseContainer from "./RegularCaseContainer/RegularCaseContainer";
import LargeImgAndNoImgContainer from "./LargeImgAndNoImgContainer/LargeImgAndNoImgContainer";
import CaseQuote from "./CaseQuote/CaseQuote";
import SearchBar from "./SearchBar/SearchBar";

import "./CaseContainer.css";

function CaseContainer() {
  const [cases, setCases] = useState([]);
  const [industry, setIndustry] = useState();
  const [filter, setFilter] = useState();
  const [filteredCases, setFilteredCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://private-712941-deptagency.apiary-mock.com/cases"
      );
      setCases(result.data);
      setFilteredCases(result.data);
    };
    fetchData();
  }, []);

  const handleIndustryInputChange = (data) => {
    if (data) {
      setIndustry({ ...industry, label: data.label });
    }
  };

  useEffect(() => {
    let filteredIndustries = cases;
    if (industry !== null) {
      filteredIndustries = filteredIndustries.filter(
        (filteredIndustry) => filteredIndustry.industry === industry.label
      );
      setFilteredCases(filteredIndustries);
    }
  }, [industry]);

  function clearFilter() {
    setFilteredCases(cases);
  }

  // console.log(cases);
  // console.log(industry);
  // console.log(noImgCases);

  let regularCases = filteredCases.filter((singleCase) => singleCase.img);
  let noImgCases = filteredCases.filter((singleCase) => singleCase.img === "");

  return (
    <>
      <SearchBar
        handleIndustryInputChange={handleIndustryInputChange}
        industry={industry}
        clearFilter={clearFilter}
      />
      <RegularCaseContainer
        leftCaseData={regularCases[0]}
        rightCaseData={regularCases[1]}
      />
      <RegularCaseContainer
        leftCaseData={regularCases[2]}
        rightCaseData={regularCases[3]}
      />
      <LargeImgAndNoImgContainer
        largeImageLeft
        leftCaseData={regularCases[4]}
        noImgDataTop={noImgCases[0]}
        noImgDataBottom={noImgCases[1]}
      />
      <RegularCaseContainer
        leftCaseData={regularCases[5]}
        rightCaseData={regularCases[6]}
      />
      <LargeImgAndNoImgContainer
        noImgDataTop={noImgCases[2]}
        noImgDataBottom={noImgCases[3]}
        leftCaseData={regularCases[4]}
      />
      <RegularCaseContainer
        leftCaseData={regularCases[7]}
        rightCaseData={regularCases[8]}
      />
      <RegularCaseContainer
        leftCaseData={regularCases[9]}
        rightCaseData={regularCases[10]}
      />
      <CaseQuote />
      <RegularCaseContainer
        leftCaseData={regularCases[11]}
        rightCaseData={regularCases[12]}
      />
    </>
  );
}

export default CaseContainer;
