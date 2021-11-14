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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            eligendi blanditiis aperiam, vero, commodi molestias possimus totam
            eveniet perspiciatis quis eaque laudantium nam ut praesentium
            exercitationem reprehenderit sint. Quidem sint error cumque atque
            excepturi, quia odit quaerat, corporis assumenda deleniti minima at,
            molestias eligendi enim dicta sit. Nulla vel nesciunt similique
            facilis itaque, molestiae error, corporis nostrum eaque dolor
            numquam mollitia ab natus. Quod possimus nisi voluptate id explicabo
            consequatur tenetur perferendis dolorum? Maxime non quo qui aut
            minus architecto magni molestiae, cumque natus necessitatibus!
            Necessitatibus quam culpa sed dicta quod vero consectetur ad sequi
            quas? Nihil in veritatis reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
