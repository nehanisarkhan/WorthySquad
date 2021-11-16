import React, { useState } from "react";
import axios from "axios";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Volunteer() {
  const [volunteer_name, setName] = useState("");
  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("values", volunteer_name);
    axios
      .post("https://worthysquad.herokuapp.com/api/volunteer/newVolunteer/", {
        volunteer_name,
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
      <h1 style={{ marginBottom: "8px" }}>Volunteer Form!</h1>
      <p>
        "The best way to find youself is to lose yourself in the service of
        others "
      </p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2> Volunteer Information</h2>
        <Row>
          <Col>
            <Form.Group controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={volunteer_name}
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
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          controlId="validationCustom04"
          //   style={{ marginTop: "5px", marginBottom: "8px" }}
        >
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

        <div
          style={{
            // backgroundColor: "green",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />
          <br />
          <br />
          <Button variant="secondary" type="submit" onClick={submit}>
            Volunteer
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Volunteer;
