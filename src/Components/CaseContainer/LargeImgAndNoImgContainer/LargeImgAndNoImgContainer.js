import React from "react";
import PropTypes from "prop-types";
import CaseNoImg from "./CaseNoImg/CaseNoImg";
import CaseCard from "../RegularCaseContainer/CaseCard/CaseCard";

import "./LargeImgAndNoImgContainer.css";

function LargeImgAndNoImgContainer({
  leftCaseData,
  noImgDataTop,
  noImgDataBottom,
  largeImageLeft,
}) {
  console.log(noImgDataTop);
  console.log(noImgDataBottom);
  return (
    <div className="large-img-and-no-img-container">
      {largeImageLeft ? (
        <>
          <CaseCard
            classNameImg="case-card__img--large"
            caseData={leftCaseData}
          />
          <div className="large-img-and-no-img-container__no-img-cases">
            <CaseNoImg caseNoImgData={noImgDataTop} />
            <CaseNoImg caseNoImgData={noImgDataBottom} />
          </div>
        </>
      ) : (
        <>
          <div className="large-img-and-no-img-container__no-img-cases">
            <CaseNoImg caseNoImgData={noImgDataTop} />
            <CaseNoImg caseNoImgData={noImgDataBottom} />
          </div>
          <CaseCard
            classNameImg="case-card__img--large"
            caseData={leftCaseData}
          />
        </>
      )}
    </div>
  );
}

LargeImgAndNoImgContainer.propTypes = {};

export default LargeImgAndNoImgContainer;
