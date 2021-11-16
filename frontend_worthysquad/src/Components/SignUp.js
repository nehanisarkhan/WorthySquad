import { useState } from "react";
// import "./App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

  return (
    <div>
      <form
        // onSubmit={submit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          gap: "5px",
        }}
        method="post"
      >
        <input
          type="text"
          placeholder="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={submit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
