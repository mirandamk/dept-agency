import React, { useState } from "react";
import PropTypes from "prop-types";
import CaseCard from "./CaseCard/CaseCard";

import './RegularCaseContainer.css'

function RegularCaseContainer({ leftCaseData, rightCaseData }) {

  return (
    <div className="regular-case-container">
      <CaseCard caseData={leftCaseData} />
      <CaseCard caseData={rightCaseData} />
    </div>
  );
}

RegularCaseContainer.propTypes = {};

export default RegularCaseContainer;
