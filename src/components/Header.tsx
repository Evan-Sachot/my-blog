import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

 function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Mon Blog</h1>
      </div>

      <nav className="nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header()