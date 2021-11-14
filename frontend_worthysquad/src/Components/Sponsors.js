import React from "react";
import { Carousel } from "react-bootstrap";
import "../Sponsors.css";

function Sponsors() {
  return (
    <div className="col-md-12">
      <div className="Container">
        <h2>Sponsors</h2>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1625252054555-383c744c5c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
              height="200px"
              width="600px"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1577012325504-110f8df056c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
              height="200px"
              width="600px"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              height="200px"
              width="600px"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Sponsors;
