import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>W</span>orthy
            <span>S</span>quad
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Volunteer</a>
            </li>
            <li>
              <a href="#">Login/Register</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <h1>Donate And Contribute To The Society</h1>
      </section>
    </>
  );
};

export default Navbar;
