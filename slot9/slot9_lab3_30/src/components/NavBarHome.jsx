import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HouseDoorFill,
  InfoCircleFill,
  TelephoneFill,
  PersonCircle,
  HeartFill,
  BoxArrowInRight,
} from "react-bootstrap-icons";

const NavBarHome = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Navbar.Brand as={Link} to="/" className="fw-bold text-danger">
        🎬 MovieApp
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        {/* Left links */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            <HouseDoorFill className="me-1" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            <InfoCircleFill className="me-1" /> About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            <TelephoneFill className="me-1" /> Contact
          </Nav.Link>
        </Nav>

        {/* Right side: Form + Icons */}
        <Form className="d-flex align-items-center">
          <FormControl
            type="search"
            placeholder="Quick search"
            className="me-2"
          />
          <Button variant="outline-light" className="me-3">
            Search
          </Button>

          {/* Dropdown Accounts */}
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="outline-light">
              <PersonCircle size={20} className="me-1" /> Accounts
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/account">
                Manage Your Profiles
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/account">
                Build Your Account
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/change-password">
                Change Password
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Other icons */}
          <Button variant="outline-light" className="me-2">
            <BoxArrowInRight size={18} className="me-1" /> Login
          </Button>
          <Button variant="outline-light">
            <HeartFill size={18} className="me-1 text-danger" /> Favourites
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarHome;
