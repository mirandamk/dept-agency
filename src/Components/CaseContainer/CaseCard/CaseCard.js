import React from "react";
import PropTypes from "prop-types";

import "./CaseCard.css";

function CaseCard({
  caseData,
  classNameImg,
  classNameName,
  classNameDescription,
  className,
}) {
  return (
    <div className={className}>
      {caseData?.id && (
        <div>
          {caseData.img && (
            <img className={classNameImg} src={caseData.img} alt="case" />
          )}
          <div className={classNameName}>{caseData.name}</div>
          <div className={classNameDescription}>{caseData.description}</div>
          {caseData.ceo && <div className={classNameName}>{caseData.ceo}</div>}
          {caseData.img && (
            <a className="case-card__url" href={caseData.url}>
              View case
            </a>
          )}
        </div>
      )}
    </div>
  );
}

CaseCard.propTypes = {
  caseData: PropTypes.object,
  classNameImg: PropTypes.string,
  classNameName: PropTypes.string,
  classNameDescription: PropTypes.string,
  className: PropTypes.string,
};

export default CaseCard;
