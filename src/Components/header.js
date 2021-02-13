import React from 'react';
import { Button, Navbar,Nav,NavDropdown} from 'react-bootstrap'
import "./Header.css";


export default function Header() {
 

  return (
    <>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">CIVIL-MCQ</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="">Paid-Material</Nav.Link>
      <NavDropdown title="Sections" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Building-Materials">Building-Materials</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Section-2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Section-3</NavDropdown.Item>
        
       
      </NavDropdown>
    </Nav>
    <Nav>
     
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}
