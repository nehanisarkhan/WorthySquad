import React, { useState } from "react";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  // const [inputs, setInputs] = useState({});
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("values", email);
    axios
      .post("https://worthysquad.herokuapp.com/api/user/signin/", {
        password,
        email,
      })
      .then((response) => {
        console.log(response.data, "heloooo");
        history.push("/");
        alert("Welcome");
      })
      .catch((err) => console.error(err));
    console.log(email);
  };

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const history = useHistory();

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        marginTop: "200px",
        marginLeft: "auto",
        marginRight: "auto",

        border: "1px solid gray",
        padding: "10px",
        width: "500px",
        height: "300px",
      }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="validationCustom01">
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
          controlId="validationCustom02"
          style={{ marginTop: "5px", marginBottom: "8px" }}
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

        <Button variant="secondary" type="submit" onClick={submit}>
          Login Now
        </Button>
        <p>
          Not registered ? <Link to="/signup">Sign-Up </Link>
          Now !
        </p>
      </Form>
    </div>
  );
}

export default Login;
