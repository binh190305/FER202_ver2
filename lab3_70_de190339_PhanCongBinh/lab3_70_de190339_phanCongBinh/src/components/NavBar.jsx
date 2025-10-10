import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HouseDoorFill, Film, PersonCircle, BoxArrowInRight, InfoCircle } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-danger">
          🎬 MovieApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Navigation links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="d-flex align-items-center">
              <HouseDoorFill className="me-1" /> HomePage
            </Nav.Link>
            <Nav.Link as={Link} to="/movies" className="d-flex align-items-center">
              <Film className="me-1" /> Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/home" className="d-flex align-items-center">
              <InfoCircle className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/account" className="d-flex align-items-center">
              <PersonCircle className="me-1" /> Account
            </Nav.Link>
            <Nav.Link as={Link} to="/footer" className="d-flex align-items-center">
              <BoxArrowInRight className="me-1" /> Footer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
