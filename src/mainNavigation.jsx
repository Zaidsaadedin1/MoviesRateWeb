import React from 'react';
import { Link } from 'react-router-dom';
import '../src/css/Nav.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">JordanMovies</Link>
        </li>
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
