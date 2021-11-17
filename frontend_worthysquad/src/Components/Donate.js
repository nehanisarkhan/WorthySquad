import React, { useState } from "react";
import axios from "axios";
import { Form, Col, Button, Row, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Donate() {
  const [donator_name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("values", donator_name);
    axios
      .post("https://worthysquad.herokuapp.com/api/donator/newDonator/", {
        donator_name,
        amount,
        eventName,
        email,
      })
      .then((response) => {
        console.log(response.data, "success");
        history.push("/");
      })
      .catch((err) => console.error(err));
    console.log(email);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      //   event.stopPropagation();
    }

    setValidated(true);
  };
  const history = useHistory();

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
                placeholder="Name"
                value={donator_name}
                onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>Event</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom05">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            required
            type="numbers"
            placeholder="Amount to be donated"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

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
          <Nav.Link href="/payment">
            <Button variant="secondary" type="submit" onClick={submit}>
              Donate
            </Button>
          </Nav.Link>
        </div>
      </Form>
    </div>
  );
}

export default Donate;
