// <>
//   <Carousel>
//     <EventConsumer>
//       {(value) => {
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={img}
//             height="650px"
//             width="350px"
//             alt="First slide"
//             onClick={() => value.handleDetail(id)}
//           />
//           <Carousel.Caption>
//             <h3> Plant trees and protect the environment</h3>
//             <p>Plantation Event</p>
//           </Carousel.Caption>
//         </Carousel.Item>;
//       }}
//     </EventConsumer>
//   </Carousel>
// </>

import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { EventConsumer } from "../Context";

function Carousel1(props) {
  const { id, img, title, category } = props.event;

  return (
    <>
      <React.Fragment>
        <EventConsumer>
          {(value) => (
            <Carousel.Item>
              <Image src={img} onClick={() => value.handleDetail(id)} fluid />
              <Carousel.Caption>
                <h3> {title}</h3>
                <p>{category}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </EventConsumer>
      </React.Fragment>
    </>
  );
}

export default Carousel1;
