import React, { useState } from "react";

import { Form, Col, Button } from "react-bootstrap";

function SignUp() {
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
      <h1 style={{ marginBottom: "8px" }}>Sign Up !</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
            defaultValue=""
            name="fname"
            value={inputs.fname || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last Name"
            defaultValue=""
            name="lname"
            value={inputs.lname || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Email"
            defaultValue=""
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          controlId="validationCustom04"
          //   style={{ marginTop: "5px", marginBottom: "8px" }}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Password"
            defaultValue=""
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button variant="secondary" type="submit" style={{ marginTop: "8px" }}>
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
