import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <h1>WELCOME</h1>
      <p>Support Our Mission. Make a Difference Today!</p>
      <Link to="/donation" className="hero-btn btn-primary">Donate Now</Link> 
    </div>
  );
}

export default Hero;
