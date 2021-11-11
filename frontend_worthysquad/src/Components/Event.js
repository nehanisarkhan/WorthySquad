import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import { EventConsumer } from "../Context";
import { Link } from "react-router-dom";

const Event = (props) => {
  const { id, title, img, category } = props.event;

  return (
    <>
      <React.Fragment>
        <EventConsumer>
          {(value) => (
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-muted">{category}</Card.Text>
                <Link to="/eventDetails">
                  <Button
                    variant="secondary"
                    onClick={() => value.handleDetail(id)}
                  >
                    Check Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          )}
        </EventConsumer>
      </React.Fragment>
    </>
  );
};
export default Event;
