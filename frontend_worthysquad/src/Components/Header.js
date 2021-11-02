import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">WorthySquad</Navbar.Brand>
          <Nav className="d-flex justify-content-between">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#donate">Donate</Nav.Link>
            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
