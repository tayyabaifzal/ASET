import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/asetlogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-item">
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" className="logo-img" />
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/donation" className="nav-item">Donation</Link>
            <Link to="/events" className="nav-item">Events</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
