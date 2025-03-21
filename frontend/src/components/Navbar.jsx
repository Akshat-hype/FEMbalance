import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {[
          "Home",
          "Committee",
          "Keynote Speakers",
          "Tutorial",
          "Registration",
          "Call For Paper",
          "Submission",
          "Venue",
          "Accommodation",
          "Gallery",
          "Contact Us",
          "Sponsors",
        ].map((item) => (
          <li key={item}>
            <Link
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
