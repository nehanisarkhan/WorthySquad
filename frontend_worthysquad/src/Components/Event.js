import React from "react";
import { Card, Button } from "react-bootstrap";

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
                <Button variant="primary">Check Details</Button>
              </Card.Body>
            </Card>
          </React.Fragment>
        );
      })}
    </>
  );
};
export default Event;
