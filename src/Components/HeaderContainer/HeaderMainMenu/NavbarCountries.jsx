import React from "react";

import { NavLink } from "react-router-dom";
import TriangleIcon from "../../../images/Triangle.png";

import "./NavbarCountries.css";

function NavbarCountries() {
  return (
    <nav className="navbar-countries">
      <div className="navbar-countries__title">LANDEN</div>
      <NavLink className="navbar-countries__link" to="/">
        <img
          className="navbar-countries__link-img"
          src={TriangleIcon}
          alt="global"
        />
        GLOBAL
      </NavLink>
      <NavLink className="navbar-countries__link" to="/">
        <img
          className="navbar-countries__link-img"
          src={TriangleIcon}
          alt="nederland"
        />
        NEDERLAND
      </NavLink>
      <NavLink className="navbar-countries__link" to="/">
        <img
          className="navbar-countries__link-img"
          src={TriangleIcon}
          alt="united states"
        />
        UNITED STATES
      </NavLink>
      <NavLink className="navbar-countries__link" to="/">
        <img
          className="navbar-countries__link-img"
          src={TriangleIcon}
          alt="ireland"
        />
        IRELAND
      </NavLink>
      <NavLink className="navbar-countries__link" to="/">
        <img
          className="navbar-countries__link-img"
          src={TriangleIcon}
          alt="united kingdom"
        />
        UNITED KINGDOM
      </NavLink>
      <NavLink className="navbar-countries__link" to="/">
        <img
          className="navbar-countries__link-img"
          src={TriangleIcon}
          alt="deutschland"
        />
        DEUTSCHLAND
      </NavLink>
      <NavLink className="navbar-countries__link" to="/">
        <img
          className="navbar-countries__link-img"
          src={TriangleIcon}
          alt="schweiz"
        />
        SCHWEIZ
      </NavLink>

    </nav>
  );
}

export default NavbarCountries;
