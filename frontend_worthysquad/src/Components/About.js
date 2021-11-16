import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      {/*title*/}
      <div className="row">
        <div className="col-10 mx-auto text-center text-muted my-5">
          <h1>About Us</h1>
        </div>
      </div>
      {/*title end*/}

      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 ">
          <img
            src="https://thejournalofmhealth.com/wp-content/uploads/2019/02/Taking-Care-of-Carers.jpg"
            className="img-fluid"
            alt="product"
          />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            “We, at WorthySquad intend to build a platform where our nation's
            social challenges are fixed in a new way and people from all walks
            of life can come forward to reach out to the underprivileged or put
            a roadblock to social inequality happening around”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
