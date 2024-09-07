import React from "react";

import '../stylesheets/index.css';

const Header: React.FC = () => {
  return (
    <header className="header logo">
      <div className="logo">
        <h1><a href="/">Stockfolio</a></h1>
      </div>
        <nav className="nav-links">
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      <div >
        <li><a href="/Signup">Signup</a></li>
        <li><a href="/Login">Login</a></li>
      </div>
  </header>
  );
};

export default Header;