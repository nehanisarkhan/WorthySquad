import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

const Event = ({ events }) => {
  return (
    <>
      {events.map((item) => {
        return (
          <React.Fragment>
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                {/* <Card.Text>{item.description}</Card.Text> */}
                <Nav.Link href="/eventDetails">
                  <Button variant="secondary">Check Details</Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          </React.Fragment>
        );
      })}
    </>
  );
};
export default Event;
