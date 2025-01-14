import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>
      <nav className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
    </header>
  );
};

export default Navbar;

