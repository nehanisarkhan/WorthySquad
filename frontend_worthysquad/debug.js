// import React from "react";
// import EventList from "./EventList";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="main-nav">
//         <div className="logo">
//           <h2>
//             <span>W</span>orthy
//             <span>S</span>quad
//           </h2>
//         </div>
//         <div className="menu-link">
//           <ul>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Events</a>
//             </li>
//             <li>
//               <a href="#">Donate</a>
//             </li>
//             <li>
//               <a href="#">Volunteer</a>
//             </li>
//             <li>
//               <a href="#">Login/Register</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <section className="hero-section">
//         <h1>Donate And Contribute To The Society</h1>
//         <EventList />
//       </section>
//     </>
//   );
// };

// export default Navbar;
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;




import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Event = ({ events }) => {
  return (
    <>
      {events.map((item) => {
        return (
          <React.Fragment>
            <Row className="g-3">
              <Col>
                <Card style={{ width: "16rem" }} className=" g-3">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    {/* <Card.Text>{item.description}</Card.Text> */}
                    <Button variant="primary">Check Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </React.Fragment>
        );
      })}
    </>
  );
};
export default Event;
