import React from "react";
import { Container, Button, Card } from "react-bootstrap";

const EventDetails = () => {
  return (
    <Container>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          fluid
        />
        <Card.Title>This is title</Card.Title>
        <Card.Body>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
          similique.
        </Card.Body>
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
};

export default EventDetails;
