import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { EventProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <EventProvider>
      <Router>
        <App />
      </Router>
    </EventProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
