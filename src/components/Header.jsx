import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Blog de moi (Evan)</h1>
      </div>

      <nav className="nav">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;