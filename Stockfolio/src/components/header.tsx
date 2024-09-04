import React from "react";

import '../stylesheets/header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
        <div className="logo">
             <h1><a href="/">Stockfolio</a></h1>
        </div>
        <nav className="nav-links">
            <ul>
                <li><a href="/Dashboard">Dashboard</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className="search-bar">
            <input type="text" placeholder="Search..."/>
        </div>
    </header>
  );
};

export default Header;