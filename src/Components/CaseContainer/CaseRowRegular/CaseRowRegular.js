import React, { useState } from "react";
import PropTypes from "prop-types";
import CaseCard from "../CaseCard/CaseCard";

import './CaseRowRegular.css'

function CaseRowRegular({ leftCaseData, rightCaseData }) {

  return (
    <div className="case-row-regular">
      <CaseCard caseData={leftCaseData} />
      <CaseCard caseData={rightCaseData} />
    </div>
  );
}

CaseRowRegular.propTypes = {
  leftCaseData: PropTypes.object, 
  rightCaseData: PropTypes.object,
};

export default CaseRowRegular;
