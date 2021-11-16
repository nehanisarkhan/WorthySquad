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
            <h1
              style={{
                color: "#5E616A",
                marginLeft: 135,
                textShadow: "2px 2px #AAAAAA",
              }}
            >
              Join Us
            </h1>
            <Link
              to="/eventlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="secondary" style={{ margin: 20, width: 150 }}>
                Donate
              </Button>
            </Link>

            <Link
              to="/eventlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="secondary" style={{ margin: 20, width: 150 }}>
                Volunteer
              </Button>
            </Link>
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
        <h1
          style={{
            display: "grid",
            placeItems: "center",
            color: "#5E616A",
            textShadow: "2px 2px #AAAAAA",
          }}
        >
          Our Mission
        </h1>

        <div
          style={{
            display: "flex",
            placeContent: "flex-start",
            marginLeft: "100px",
            marginRight: "auto",
            marginTop: "50px",
            color: "#5E616A",
          }}
        >
          <p style={{ width: "50%" }}>
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Pineapple"
              style={{
                width: "170px",
                height: "170px",
                marginRight: "15px",
                float: "left",
                borderStyle: "solid",
                borderRadius: "50%",
                borderWidth: "2px",
                borderColor: "black",
              }}
            />
            “Easy to utilize the resources, and be the beacon of change in
            someone’s life”
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            // marginLeft: "auto",
            marginRight: "100px",
            color: "#5E616A",
          }}
        >
          <p style={{ width: "50%" }}>
            <img
              src="https://images.unsplash.com/photo-1591522810850-58128c5fb089?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXJpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Pineapple"
              style={{
                width: "170px",
                height: "170px",
                marginLeft: "15px",
                float: "right",
                borderStyle: "solid",
                borderRadius: "50%",
                borderWidth: "2px",
                borderColor: "black",
                color: "#5E616A",
              }}
            />
            “Before, people were unable to judge where to go to find and
            contribute to social works which are genuine and there's
            transparency in the funds being utilized for the right cause, so
            through our app we would bridge that gap”
          </p>
        </div>
        <div
          style={{
            display: "flex",
            placeContent: "flex-start",
            marginLeft: "100px",
            marginRight: "auto",
            marginBottom: "30px",
            color: "#5E616A",
          }}
        >
          <p style={{ width: "50%" }}>
            <img
              src="https://images.unsplash.com/photo-1608555855762-2b657eb1c348?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Pineapple"
              style={{
                width: "170px",
                height: "170px",
                marginRight: "15px",
                float: "left",
                borderStyle: "solid",
                borderRadius: "50%",
                borderWidth: "2px",
                borderColor: "black",
              }}
            />
            “Folks who need a sense of meaning and a job that makes an impact to
            feel fulfilled, even if that job is less financially rewarding than
            others”
          </p>
        </div>
        <h3
          style={{
            // display: "grid",
            // placeContent: "center",
            textAlign: "center",
            maxWidth: "65%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "50px",
            fontStyle: "italic",
            color: "#5E616A",
          }}
        >
          "As we work to create light for others, we naturally light our own
          way."---- Mary Anne Radmacher
        </h3>
        <FooterContainer />
      </div>
    </div>
  );
}

export default Homepage;
