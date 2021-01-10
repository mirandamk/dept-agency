import React from "react";
import PropTypes from "prop-types";

import "./HeaderBar.css";

function HeaderBar({ onMenuClicked, isMenuMode }) {
  return (
    <div>
      {!isMenuMode ? (
        <div className="header-bar">
          <div className="header-bar__dept"></div>
          <button onClick={onMenuClicked} className="header-bar__btn">
            MENU =
          </button>
        </div>
      ) : (
        <div className="header-bar header-bar--x">
          <div className="header-bar__dept header-bar__dept--x"></div>
          <button onClick={onMenuClicked} className="header-bar__btn header-bar__btn--x">
            X
          </button>
        </div>
      )}
    </div>
  );
}

HeaderBar.propTypes = {
  onMenuClicked: PropTypes.func,
  isMenuMode: PropTypes.bool,
};

export default HeaderBar;
