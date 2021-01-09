import React from "react";
import PropTypes from "prop-types";

import "./CaseNoImg.css";

function CaseNoImg({ caseNoImgData }) {
  return (
    <>
      {caseNoImgData && (
        <div className='case-no-img'>
          <div className="case-no-img__name">{caseNoImgData.name}</div>
          <div className="case-no-img__description">
            {caseNoImgData.description}
          </div>
          <a className="case-card__url" href={caseNoImgData.url}>
            View case
          </a>
        </div>
      )}
    </>
  );
}

CaseNoImg.propTypes = {};

export default CaseNoImg;
