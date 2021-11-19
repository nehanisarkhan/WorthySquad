import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { EventProvider } from "./Context";
// import { StateProvider } from "../src/Components/StateProvider";
// import reducer, { initialState } from "./Components/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <EventProvider>
      <Router>
        <App />
      </Router>
    </EventProvider>
    {/* </StateProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
