import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Sponsors from "./Components/Sponsors";
import Carousel1 from "./Components/Carousel1";
import "./Components/Carousel1";
import { Button } from "react-bootstrap";
import { FooterContainer } from "./containers/footer";

function Homepage() {
  return (
    <>
      <div>
        <Carousel1 />
        {/* <Sponsors /> */}
        <h2>Join Us</h2>
        <Button>Donate</Button>
        <Button>Volunteer</Button>
        {/* <Footer /> */}
        <FooterContainer />
      </div>
    </>
  );
}

export default Homepage;
