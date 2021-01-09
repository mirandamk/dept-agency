import React from "react";
import PropTypes from "prop-types";

import "./CaseCard.css";

function CaseCard({ caseData, classNameImg }) {
  const caseCardImgClassName = `case-card__img ${classNameImg}`
  return (
    <div className="case-card">
      {caseData?.id && (
        <div>
          <img className={caseCardImgClassName} src={caseData.img} alt="case" />
          <div className="case-card__name">{caseData.name}</div>
          <div className="case-card__description">{caseData.description}</div>
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
