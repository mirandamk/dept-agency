import React, { useState } from "react";
import PropTypes from "prop-types";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";

import "./HeaderContainer.css";
import HeaderMainMenu from "./HeaderMainMenu/HeaderMainMenu";

function HeaderContainer(props) {
  const [isMenuMode, setIsMenuMode] = useState(false);

  const onMenuClicked = () => {
    if (isMenuMode === false) {
      setIsMenuMode(true);
    } else {
      setIsMenuMode(false);
    }
  };

  return (
    // <div className="header-container">
    <div className={`header-container ${isMenuMode ? "header-container__menu" : ""}`}>
      {isMenuMode ? (
        <div>
          <HeaderMainMenu
            onMenuClicked={onMenuClicked}
            isMenuMode={isMenuMode}
          />
        </div>
      ) : (
        <HeaderPhoto onMenuClicked={onMenuClicked} />
      )}
    </div>
  );
}

HeaderContainer.propTypes = {};

export default HeaderContainer;
