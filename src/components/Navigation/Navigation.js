import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="warning" expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand href="/home" className="fw-bold">
          Food Land
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/"
              className="text-dark text-decoration-none mx-3 fw-bold"
            >
              {" "}
              Home
            </Link>

            <Link
              to="/about"
              className="text-black text-decoration-none mx-3 fw-bold"
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
