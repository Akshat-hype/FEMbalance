import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌸 FEMbalance</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" className="nav-item">
            Calendar
          </NavLink>
        </li>
        <li>
          <NavLink to="/period-info" className="nav-item">
            Period Info
          </NavLink>
        </li>
        <li>
          <NavLink to="/exercise" className="nav-item">
            Exercise
          </NavLink>
        </li>
        <li>
          <NavLink to="/diet" className="nav-item">
            Diet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
