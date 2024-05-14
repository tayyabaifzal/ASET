// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/asetlogo.png';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar-item">
//           <Link to="/" className="logo">
//             <img src={Logo} alt="logo" className="logo-img" />
//           </Link>
//           <div className="nav-links">
//             <Link to="/" className="nav-item">Home</Link>
//             <Link to="/donation" className="nav-item">Donation</Link>
//             <Link to="/events" className="nav-item">Events</Link>
//             <Link to="/contact" className="nav-item">Contact</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/asetlogo.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light custom-nav">
      <div className="container-fluid">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" width="70" height="70" className="vertical-align-middle" />
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/donation">Donation</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;