import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/Logo.png'
import Menu from '../assets/Menu.png'
import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

function NavbarNav() {
  return (
    <Navbar
      expand="lg"
    /*   fixed="top" */
      /* class="bg_light" className="bgcolor" */ className="bg_col"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
      <div class="bg">
  <input type="text" placeholder="What do you want to watch"/>
</div>
          
          </Nav>
          <Nav.Link href="/login">
            <h5 className="text-light">Sign in</h5>
          </Nav.Link>
          <Nav.Link href="/register">
          <img src={Menu} className="logo px-4" alt="Logo" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarNav;
