import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Blog de moi (Evan)</h1>
      </div>

      <nav className="nav">
        <ul>
          <li></li>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/articles/create">Créer un article</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;