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
    <div className="header-container">
      {isMenuMode ? (
        <HeaderMainMenu onMenuClicked={onMenuClicked} isMenuMode={isMenuMode} />
      ) : (
        <HeaderPhoto onMenuClicked={onMenuClicked} />
      )}
    </div>
  );
}

HeaderContainer.propTypes = {};

export default HeaderContainer;
