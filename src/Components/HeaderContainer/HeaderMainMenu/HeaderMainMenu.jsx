import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbars/Navbar";
import HeaderBar from "../HeaderBar/HeaderBar";

import "./HeaderMainMenu.css";
import NavbarCountries from "./Navbars/NavbarCountries";
import SocialMediaLinksContainer from "./Navbars/SocialMediaLinksContainer";

function HeaderMainMenu({ onMenuClicked, isMenuMode }) {
  return (
    <div className="header-main-menu">
      <HeaderBar onMenuClicked={onMenuClicked} isMenuMode={isMenuMode} />
      <div>
        <NavbarCountries />
        <SocialMediaLinksContainer />
        <Navbar />
      </div>
    </div>
  );
}

HeaderMainMenu.propTypes = {
  onMenuClicked: PropTypes.func,
  isMenuMode: PropTypes.bool,
};

export default HeaderMainMenu;
