import React from "react";
import PropTypes from "prop-types";
import CaseNoImg from "./CaseNoImg";
import CaseCard from "../CaseCard/CaseCard";

import "./CaseRowAlternative.css";

function CaseRowAlternative({
  leftCaseData,
  noImgDataTop,
  noImgDataBottom,
  largeImageLeft,
}) {
  return (
    <div className="case-row-alternative">
      {largeImageLeft ? (
        <>
          <CaseCard
            classNameImg="case-card__img--large"
            caseData={leftCaseData}
          />
          <div className="case-row-alternative__no-img-cases">
            <CaseNoImg caseNoImgData={noImgDataTop} />
            <CaseNoImg caseNoImgData={noImgDataBottom} />
          </div>
        </>
      ) : (
        <>
          <div className="case-row-alternative__no-img-cases">
            <CaseNoImg caseNoImgData={noImgDataTop} />
            <CaseNoImg caseNoImgData={noImgDataBottom} />
          </div>
          <CaseCard
            classNameImg="case-card__img--mobile-img"
            classNameText="case-card__img--mobile-text"
            caseData={leftCaseData}
          />
        </>
      )}
    </div>
  );
}

CaseRowAlternative.propTypes = {};

export default CaseRowAlternative;
