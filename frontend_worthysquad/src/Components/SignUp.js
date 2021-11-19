import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("values", firstName);
    axios
      .post("https://worthysquad.herokuapp.com/api/user/signup", {
        firstName,
        lastName,
        password,
        email,
      })
      .then((response) => {
        // setName(response.data);
        // setLname(response.data);

        console.log(response.data, "success");
        history.push("/Login");
      })
      .catch((err) => console.error(err));
  };

  const history = useHistory();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      //   event.stopPropagation();
    }

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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          style={{ marginTop: "8px" }}
          onClick={submit}
        >
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
