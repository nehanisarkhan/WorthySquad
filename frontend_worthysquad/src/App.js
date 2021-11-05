import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Header from "./Components/Header";
// import EventDetails from "./Components/EventDetails";
// import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
              height="600px"
              width="350px"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> Plant trees and protect the environment</h3>
              <p>Plantation Event</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=" https://cdn.pixabay.com/photo/2020/04/17/08/11/blood-5053770_960_720.jpg"
              height="600px"
              width="350px"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Blood Donation Event</h3>
              <p>Donate Blood and save Lives</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/10/25/07/09/hands-1005412_960_720.jpg"
              height="600px"
              width="350px"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Extend a Helping Hand</h3>
              <p>Helping the Needy</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
