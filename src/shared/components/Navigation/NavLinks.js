import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">NEW PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTİCATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
