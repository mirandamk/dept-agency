import React, { useState } from "react";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";
import HeaderMainMenu from "./HeaderMainMenu/HeaderMainMenu";

import "./HeaderContainer.css";

function HeaderContainer() {
  const [isMenuMode, setIsMenuMode] = useState(false);

  const onMenuClicked = () => {
    if (isMenuMode === false) {
      setIsMenuMode(true);
    } else {
      setIsMenuMode(false);
    }
  };

  return (
    <div
      className={`header-container ${
        isMenuMode ? "header-container__menu" : ""
      }`}
    >
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

export default HeaderContainer;
