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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://private-712941-deptagency.apiary-mock.com/cases"
      );
      setCases(result.data);
    };
    fetchData();
  }, []);

  let regularCases = cases.filter((singleCase) => singleCase.img);
  let noImgCases = cases.filter((singleCase) => singleCase.img === "");

  const handleIndustryInputChange = (data) => {
    setIndustry({ ...industry, value: data.value });
  };

  useEffect(() => {
    filterCases()
  }, [industry]);

  let filteredCases = []

function filterCases() {
regularCases.map((regularCase) => {
  if (regularCase.industry === industry.value) {
    console.log('same type')
    filteredCases.push(regularCase)
  } else {
    console.log('not same type')
  }
  console.log(filteredCases)
  return filteredCases
}
)

}

console.log(filteredCases)

  return (
    <>
      <SearchBar
        handleIndustryInputChange={handleIndustryInputChange}
        industry={industry}
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
