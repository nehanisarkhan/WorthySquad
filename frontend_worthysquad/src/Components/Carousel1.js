import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Events } from "../data";

function Carousel1() {
  const [data] = useState(Events);
  return (
    <div className="d-grid justify-content-center align-items-center">
      <Carousel>
        {data.map((item) => {
          return (
            <Carousel.Item style={{ width: "600px", height: "auto" }}>
              <img src={item.img} alt="" />
              <Carousel.Caption>
                <h3> {item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carousel1;

// import React, { useState } from "react";
// import { Events } from "../data";
// const Carousel1 = () => {
//   const [data, setData] = useState(Events);
//   return (
//     <>
//       <div className="py-3">
//         <div
//           id="carouselExampleSlidesOnly"
//           className="carousel slide"
//           data-bs-ride="carousel"
//         >
//           <div className="carousel-inner mx-auto w-75">
//             {data.map((item) => {
//               return (
//                 <div className="carousel-item active">
//                   <img src={item.img} className="d-block w-100" alt="..." />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       ;
//     </>
//   );
// };

// export default Carousel1;
