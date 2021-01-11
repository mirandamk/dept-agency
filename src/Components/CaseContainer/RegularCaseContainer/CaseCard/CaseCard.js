import React from "react";
import PropTypes from "prop-types";

import "./CaseCard.css";

function CaseCard({ caseData, classNameImg, classNameText }) {
  const caseCardImgClassName = `case-card__img ${classNameImg}`
  const caseCardNameClassName = `case-card__name ${classNameText}`
  const caseCardDescriptionClassName = `case-card__description ${classNameText}`
  return (
    <div className="case-card">
      {caseData?.id && (
        <div>
          <img className={caseCardImgClassName} src={caseData.img} alt="case" />
          <div className={caseCardNameClassName}>{caseData.name}</div>
          <div className={caseCardDescriptionClassName}>{caseData.description}</div>
          <a className="case-card__url" href={caseData.url}>View case</a>
        </div>
      )}
    </div>
  );
}

CaseCard.propTypes = {
  caseData: PropTypes.object,
};

export default CaseCard;
