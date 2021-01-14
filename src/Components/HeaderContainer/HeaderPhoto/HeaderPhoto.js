import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "../HeaderBar/HeaderBar";

import "./HeaderPhoto.css";

function Header({ onMenuClicked }) {
  return (
    <div className="header-photo">
      <HeaderBar onMenuClicked={onMenuClicked} />
      <div className="header-photo__title">WORK</div>{" "}
    </div>
  );
}

Header.propTypes = {
  onMenuClicked: PropTypes.func,
};

export default Header;
