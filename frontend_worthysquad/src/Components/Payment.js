import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function Payment() {
  const [product] = useState({
    name: "donation",
    price: 10,
    productBy: "worthysquad ",
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
    <div className="App">
      <header className="App-header">
        <img
          src="data:image/png;base64,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"
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
          name="BUY Diet Plan"
          amount={product.price * 100}
        >
          {/* <button className="btn-large blue">Buy this product</button> */}
        </StripeCheckout>
      </header>
    </div>
  );
}

export default Payment;
