import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Sponsors from "./Components/Sponsors";
import Carousel1 from "./Components/Carousel1";
import "./Components/Carousel1";
import { Button } from "react-bootstrap";
import Footer from "./Components/Footer";

// import EventDetails from "./Components/EventDetails";
// import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Carousel1 />

        <div className="Container">
          <Sponsors />
          <br />
          <div>
            <h2>Join Us</h2>
            <Button>Donate</Button> <Button>Volunteer</Button>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
