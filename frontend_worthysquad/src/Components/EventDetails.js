import React from "react";
import { Container, Button, Card, Nav } from "react-bootstrap";
import { EventConsumer } from "../Context";

const EventDetails = (props) => {
  return (
    <EventConsumer>
      {(value) => {
        const { title, eventPicture, description } = value.detailEvent;
        return (
          <Container className="p-5 m-5 g-5">
            <Card>
              <Card.Img
                variant="top"
                src={eventPicture}
                fluid
                style={{
                  width: "30rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
              <Card.Title
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="text-capitalize"
              >
                {title}
              </Card.Title>
              <Card.Body>{description}</Card.Body>
            </Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignContent: "flex-start",
                margin: "8px",
              }}
            >
              <Nav.Link href="/donate">
                <Button variant="secondary">Donate</Button>
              </Nav.Link>
              <Nav.Link href="/volunteer">
                <Button variant="secondary">Volunteer</Button>
              </Nav.Link>
            </div>
          </Container>
        );
      }}
    </EventConsumer>
  );
};

export default EventDetails;
