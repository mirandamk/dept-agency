import React from "react";
import { NavLink } from "react-router-dom";
import TriangleIcon from "../../../../images/Triangle.png";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="home" /> HOME
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="werk" /> WERK
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="over" /> OVER
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="diensten" />
        DIENSTEN
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="partners" />
        PARTNERS
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="stories" />
        STORIES
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="vacatures" />
        VACATURES
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="events" />
        EVENTS
      </NavLink>
      <NavLink className="navbar__link" to="/">
        <img className="navbar__link-img" src={TriangleIcon} alt="contact" />
        CONTACT
      </NavLink>
    </nav>
  );
}

export default Navbar;
