import React from 'react';
// import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/asetlogo.png';


function CustomNavbar() {
  return (
    

    <nav class="navbar navbar-expand-lg bg-light custom-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src ={logo}></img>
        </a>

       
          <li class="nav-item">
            <a class="nav-link" href="#">Donation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </div>
    
    
</nav>


)
}

export default CustomNavbar


