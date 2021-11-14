import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Header";
// import Sponsors from "./Components/Sponsors";
// import Carousel1 from "./Components/Carousel1";
import "./App.css";
import { Button } from "react-bootstrap";
import { FooterContainer } from "./containers/footer";
import { Link } from "react-router-dom";
// import img1 from "./Images/logo.svg";
function Homepage() {
  return (
    <div className="App" style={{ color: "#AAAAAA" }}>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ display: "flex", flexDirection: "row", marginLeft: 200 }}>
          <div style={{ width: 500, marginTop: 160 }}>
            <h3>Don’t wait. This time is to Give.</h3>
            <h1 style={{ color: "#5E616A", marginLeft: 135 }}>Join Us</h1>
            <Button variant="secondary" style={{ margin: 20, width: 150 }}>
              <Link
                to="/eventlist"
                style={{ textDecoration: "none", color: "white" }}
              >
                Donate
              </Link>
            </Button>{" "}
            <Button variant="secondary" style={{ margin: 20, width: 150 }}>
              <Link
                to="/eventlist"
                style={{ textDecoration: "none", color: "white" }}
              >
                Volunteer
              </Link>
            </Button>
          </div>
          <div style={{ marginLeft: 50 }}>
            <img
              className="homeimg"
              src="https://thumbs.dreamstime.com/b/donation-concept-vector-illustration-volunteers-collecting-goods-charity-huge-box-donating-coins-jar-funds-gift-141608946.jpg"
              style={{ width: 600, height: 500 }}
              alt=""
            />
          </div>
        </div>
        <br />
        <br />
        <br />

        <br />
        <br />

        {/* <Carousel1 /> */}
        <div className="Container">
          <br />
          <br />
          <br />
          {/* <Sponsors /> */}
          <br />
          <div>
            <br />

            {""}
            {/* <Footer /> */}
            <br />
            <br />
            <br />
            <br />
            <>
              <FooterContainer />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
