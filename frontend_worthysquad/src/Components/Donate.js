import React, { useState } from "react";

import { Form, Col, Button, Row } from "react-bootstrap";

function Donate() {
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      //   event.stopPropagation();
    }
    console.log(inputs);
    setValidated(true);
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        marginTop: "80px",
        border: "1px solid gray",
        padding: "10px",
      }}
    >
      <h1 style={{ marginBottom: "8px" }}>Donate Form!</h1>
      <p>
        "Giving is not just about making a donation. It is About making a
        difference"
      </p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2> Donor Information</h2>
        <Row>
          <Col>
            <Form.Group controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name"
                name="fname"
                value={inputs.fname || ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="validationCustom02">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                name="lname"
                value={inputs.lname || ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>Event</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Event Name"
            name="event"
            value={inputs.event || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom05">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            required
            type="numbers"
            placeholder="Amount to be Paid"
            name="Amount"
            value={inputs.Amount || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom06">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control
            required
            type="telephone"
            placeholder="Phone number"
            name="Contact No."
            value={inputs.telephone || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="validationCustom07">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="Address"
                placeholder="1234 Main st"
                name="Address"
                value={inputs.Address || ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="validationCustom08-">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="city"
                placeholder="City name"
                name="city"
                value={inputs.city || ""}
                onChange={handleChange}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* <Button variant="secondary" type="submit" style={{ marginTop: "8px" }}>
          SignUp
        </Button> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <br />
          <br />
          <br />
          <Button variant="secondary" type="submit">
            Donate
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
}

export default Donate;
