import { useState } from "react";
import "./style.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <p>moneywise by</p>
          <img src="/assets/ewave.png" alt="logo" />
        </NavLink>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-item">
          <NavLink to="/product" onClick={toggleMenu}>
            Product
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/categories" onClick={toggleMenu}>
            Categories
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/blog" onClick={toggleMenu}>
            Blog
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/helpcenter" onClick={toggleMenu}>
            Help Center
          </NavLink>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
}
