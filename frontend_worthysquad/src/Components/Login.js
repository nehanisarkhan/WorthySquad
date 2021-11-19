import React, { useState } from "react";
import axios from "axios";
import { Form, Col, Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { actionTypes } from "./reducer";
// import { useStateValue } from "./StateProvider";

function Login() {
  // const [state, dispatch] = useStateValue();

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
        console.log(response.data, "success");

        history.push("/");
        alert("Welcome");
        // dispatch({
        //   type: actionTypes.SET_USER,
        //   user: response.data,
        // });
      })
      .catch((err) => console.error(err));
    console.log(email);
  };

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
          Not registered ? <Nav.Link href="/signup">Sign-Up </Nav.Link>
          Now !
        </p>
      </Form>
    </div>
  );
}

export default Login;
