import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const EventDetails = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"
              roundedCircle
              fluid
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"
              roundedCircle
              fluid
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"
              roundedCircle
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventDetails;
