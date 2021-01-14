import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import CaseCard from "./CaseCard/CaseCard.js";

import "./CaseContainer.css";

function CaseContainer() {
  const [cases, setCases] = useState([]);
  const [industry, setIndustry] = useState();
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

  const handleIndustryInputChange = (key, value) => {
    setIndustry({ value });
  };

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
    setFilteredCases(cases || null);
  }

  return (
    <div className="case-container">
      <div className="case-container__search-bar">
        <SearchBar
          handleIndustryInputChange={handleIndustryInputChange}
          industry={industry}
          clearFilter={clearFilter}
        />
      </div>
      <div className="case-container__cases">
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
    </div>
  );
}

export default CaseContainer;
