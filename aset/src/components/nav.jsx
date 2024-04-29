import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">ASET</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;





// import React from 'react';
// import { Navbar as RouterNavbar } from 'react-router-dom';

// const CustomNavbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg custom-nav">
//       <div className="container-fluid">
//         <div className="navbar-brand" to="/">
//           <h1>TAYYABA</h1>
//         </div>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <ul className="navbar-nav">
//             <li className="nav-link">
//               <a>PROJECTS</a>
//             </li>
//             <li className="nav-link">
//               <a>CONTACT</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default CustomNavbar;








