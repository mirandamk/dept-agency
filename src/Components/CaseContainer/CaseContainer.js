import React, { useState, useEffect } from "react";
import axios from "axios";
import CaseRowRegular from "./CaseRowRegular/CaseRowRegular";
import LargeImgAndNoImgContainer from "./CaseRowAlternative/CaseRowAlternative";
import CaseQuote from "./CaseRowQuote/CaseRowQuote";
import SearchBar from "./SearchBar/SearchBar";
import CaseCard from "./CaseCard/CaseCard.js";

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

  // const onUpdateFormData = (key, value) => {
  //   setFormData({ ...formData, [key]: value });
  // };

  const handleIndustryInputChange = (key, value) => {
    console.log('case container', value)
    setIndustry({ value  });
  };

  console.log(industry)

  // const handleIndustryInputChange = (data) => {
  //   if (data) {
  //     setIndustry({ ...industry, label: data.label });
  //   }
  // };

  useEffect(() => {
    let filteredIndustries = cases;
    if (industry !== null) {
      filteredIndustries = filteredIndustries.filter(
        (filteredIndustry) => filteredIndustry.industry === industry.value
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
        // onUpdateFilter={onUpdateFilter}
      />
      <div className="case-container">
        {filteredCases.map((singleCase, index) => {
          if (singleCase.tag === "regular") {
            return (
              <CaseCard
                key={singleCase.id}
                className={`case-card case-container${index}`}
                classNameImg="case-card__img"
                classNameName="case-card__name"
                classNameDescription="case-card__description"
                caseData={singleCase}
              />
            );
          } else if (singleCase.tag === "large-image") {
            return (
              <CaseCard
                key={singleCase.id}
                className={`case-card case-container${index}`}
                classNameImg="case-card__img--large"
                classNameName="case-card__name"
                classNameDescription="case-card__description"
                caseData={singleCase}
              />
            );
          } else if (singleCase.tag === "no-image") {
            return (
              <CaseCard
                key={singleCase.id}
                className={`case-card__no-image case-container${index}`}
                classNameName="case-card__no-image__name"
                classNameDescription="case-card__no-image__description"
                caseData={singleCase}
              />
            );
          } else if (singleCase.tag === "quote") {
            return (
              <CaseCard
                key={singleCase.id}
                className={`case-card__quote case-container${index}`}
                classNameName="case-card__quote__name"
                classNameDescription="case-card__quote__description"
                caseData={singleCase}
              />
            );
          }
        })}
      </div>

      {/* <CaseRowRegular
        leftCaseData={regularCases[0]}
        rightCaseData={regularCases[1]}
      />
      <CaseRowRegular
        leftCaseData={regularCases[2]}
        rightCaseData={regularCases[3]}
      />
      <LargeImgAndNoImgContainer
        largeImageLeft
        leftCaseData={regularCases[4]}
        noImgDataTop={noImgCases[0]}
        noImgDataBottom={noImgCases[1]}
      />
      <CaseRowRegular
        leftCaseData={regularCases[5]}
        rightCaseData={regularCases[6]}
      />
      <LargeImgAndNoImgContainer
        noImgDataTop={noImgCases[2]}
        noImgDataBottom={noImgCases[3]}
        leftCaseData={regularCases[4]}
      />
      <CaseRowRegular
        leftCaseData={regularCases[7]}
        rightCaseData={regularCases[8]}
      />
      <CaseRowRegular
        leftCaseData={regularCases[9]}
        rightCaseData={regularCases[10]}
      />
      <CaseQuote />
      <CaseRowRegular
        leftCaseData={regularCases[11]}
        rightCaseData={regularCases[12]}
      /> */}
    </>
  );
}

export default CaseContainer;
