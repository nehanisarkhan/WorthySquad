import React from "react";
import { Carousel } from "react-bootstrap";
import "../Sponsors.css";

function Sponsors() {
  return (
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
            slidesToShow={2}
          />
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1577012325504-110f8df056c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
            height="200px"
            width="600px"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          {/* <Carousel.Caption> */}
          {/* <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Sponsors;
