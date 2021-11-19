import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import "../App.css";

function Payment() {
  const [product] = useState({
    name: "donations",
    price: 10,
    productBy: "worthysquad",
  });
  const makePayment = (token) => {
    const body = { token, product };
    const headers = {
      "Content-Type": "application/json; ",
    };
    return fetch(`http://localhost:3001/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONCE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log("error"));
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <header className="App-header">
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/stripe-s-3627989-3029215.png"
          className="App-logo"
          alt="logo"
        />

        {/* <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <StripeCheckout
          stripeKey="pk_test_51JbTKCSFhbD0CPrvITksDesRTkVXGbUWkOeqqZ5zbgaXQlEWWOnhbookjo2EST3Wzio2Zxy8ecnqDGeu8PGKvs2e00cbkGmSoC"
          token={makePayment}
          name="Donations"
          amount={product.price * 100}
        ></StripeCheckout>
      </header>
    </div>
  );
}

export default Payment;
