import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { EventConsumer } from "../Context";

const EventDetails = (props) => {
  return (
    <EventConsumer>
      {(value) => {
        const { title, img, description } = value.detailEvent;
        return (
          <Container>
            <Card>
              <Card.Img variant="top" src={img} fluid />
              <Card.Title>{title}</Card.Title>
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
              <Button variant="secondary">Donate</Button>
              <Button variant="secondary">Volunteer</Button>
            </div>
          </Container>
        );
      }}
    </EventConsumer>
  );
};

export default EventDetails;
