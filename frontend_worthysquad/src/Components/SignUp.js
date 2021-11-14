import { useState } from "react";
// import "./App.css";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function submit() {
    try {
      await axios.post("https://worthysquad.herokuapp.com/api/signup/", {
        name,
        lname,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form
        onSubmit={submit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          gap: "5px",
        }}
      >
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="lname"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default SignUp;
