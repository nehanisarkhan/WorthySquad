import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">WorthySquad</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/eventlist">Events</Nav.Link>
            <Nav.Link href="/donatorlist">Donate</Nav.Link>
            <Nav.Link href="/volunteerlist">Volunteer</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/Login">Login</Nav.Link>
              {/* <Nav.Link href="/SignUp">Sign-Up</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
