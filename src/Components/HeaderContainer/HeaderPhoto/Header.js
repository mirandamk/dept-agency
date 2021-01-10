import React from "react";
import PropTypes from "prop-types";

import "./Header.css";
import HeaderMenu from "../HeaderLogoMenuBtn/HeaderMenu";

function Header(props) {
  return (
    <div className="header">
    <HeaderMenu/>
      <div className="header__title">WORK</div>{" "}
    </div>
  );
}

Header.propTypes = {};

export default Header;
