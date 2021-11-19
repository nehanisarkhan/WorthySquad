// // <>
// //   <Carousel>
// //     <EventConsumer>
// //       {(value) => {
// //         <Carousel.Item>
// //           <img
// //             className="d-block w-100"
// //             src={img}
// //             height="650px"
// //             width="350px"
// //             alt="First slide"
// //             onClick={() => value.handleDetail(id)}
// //           />
// //           <Carousel.Caption>
// //             <h3> Plant trees and protect the environment</h3>
// //             <p>Plantation Event</p>
// //           </Carousel.Caption>
// //         </Carousel.Item>;
// //       }}
// //     </EventConsumer>
// //   </Carousel>
// // </>

// // import React from "react";
// // import { Carousel, Image } from "react-bootstrap";
// // import { EventConsumer } from "../Context";

// // function Carousel1(props) {
// //   const { id, img, title, category } = props.event;

// //   return (
// //     <>
// //       <React.Fragment>
// //         <EventConsumer>
// //           {(value) => (
// //             <Carousel.Item>
// //               <Image src={img} onClick={() => value.handleDetail(id)} fluid />
// //               <Carousel.Caption>
// //                 <h3> {title}</h3>
// //                 <p>{category}</p>
// //               </Carousel.Caption>
// //             </Carousel.Item>
// //           )}
// //         </EventConsumer>
// //       </React.Fragment>
// //     </>
// //   );
// // }

// // export default Carousel1;
// /************************************
// 1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

// 2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
// ************************************/
// const slideWidth = 30;

// const _items = [
//     {
//         player: {
//             title: 'Efren Reyes',
//             desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
//             image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
//         },
//     },
//     {
//         player: {
//             title: "Ronnie O'Sullivan",
//             desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
//             image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
//         },
//     },
//     {
//         player: {
//             title: 'Shane Van Boening',
//             desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
//             image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
//         },
//     },
//     {
//         player: {
//             title: 'Mike Sigel',
//             desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
//             image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
//         },
//     },
//     {
//         player: {
//             title: 'Willie Mosconi',
//             desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
//             image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
//         },
//     },
// ];

// const length = _items.length;
// _items.push(..._items);

// const sleep = (ms = 0) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const createItem = (position, idx) => {
//     const item = {
//         styles: {
//             transform: `translateX(${position * slideWidth}rem)`,
//         },
//         player: _items[idx].player,
//     };

//     switch (position) {
//         case length - 1:
//         case length + 1:
//             item.styles = {...item.styles, filter: 'grayscale(1)'};
//             break;
//         case length:
//             break;
//         default:
//             item.styles = {...item.styles, opacity: 0};
//             break;
//     }

//     return item;
// };

// const CarouselSlideItem = ({pos, idx, activeIdx}) => {
//     const item = createItem(pos, idx, activeIdx);

//     return (
//         <li className="carousel__slide-item" style={item.styles}>
//             <div className="carousel__slide-item-img-link">
//                 <img src={item.player.image} alt={item.player.title} />
//             </div>
//             <div className="carousel-slide-item__body">
//                 <h4>{item.player.title}</h4>
//                 <p>{item.player.desc}</p>
//             </div>
//         </li>
//     );
// };

// const keys = Array.from(Array(_items.length).keys());

// const Carousel = () => {
//     const [items, setItems] = React.useState(keys);
//     const [isTicking, setIsTicking] = React.useState(false);
//     const [activeIdx, setActiveIdx] = React.useState(0);
//     const bigLength = items.length;

//     const prevClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map((_, i) => prev[(i + jump) % bigLength]);
//             });
//         }
//     };

//     const nextClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map(
//                     (_, i) => prev[(i - jump + bigLength) % bigLength],
//                 );
//             });
//         }
//     };

//     const handleDotClick = (idx) => {
//         if (idx < activeIdx) prevClick(activeIdx - idx);
//         if (idx > activeIdx) nextClick(idx - activeIdx);
//     };

//     React.useEffect(() => {
//         if (isTicking) sleep(300).then(() => setIsTicking(false));
//     }, [isTicking]);

//     React.useEffect(() => {
//         setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
//     }, [items]);

//     return (
//         <div className="carousel__wrap">
//             <div className="carousel__inner">
//                 <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--left" />
//                 </button>
//                 <div className="carousel__container">
//                     <ul className="carousel__slide-list">
//                         {items.map((pos, i) => (
//                             <CarouselSlideItem
//                                 key={i}
//                                 idx={i}
//                                 pos={pos}
//                                 activeIdx={activeIdx}
//                             />
//                         ))}
//                     </ul>
//                 </div>
//                 <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--right" />
//                 </button>
//                 <div className="carousel__dots">
//                     {items.slice(0, length).map((pos, i) => (
//                         <button
//                             key={i}
//                             onClick={() => handleDotClick(i)}
//                             className={i === activeIdx ? 'dot active' : 'dot'}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// ReactDOM.render(<Carousel />, document.getElementById('root'));

// context api

// import React, { Component } from "react";
// import { Events, detailEvent } from "./data";

// const uniqueList = [
//   ...new Set(
//     Events.map((curElem) => {
//       return curElem.category;
//     })
//   ),
//   "All",
// ];

// const EventContext = React.createContext(); //context object
// //context object has two components :-
// //Provider
// //Consumer

// class EventProvider extends Component {
//   //state a unique reference throughout the app

//   state = {
//     events: [],
//     detailEvent: detailEvent,
//     list: uniqueList,
//   };
//   //component lifecycle method
//   componentDidMount() {
//     this.setEvents(); //this will ensure only the copies of data is mounted and not the actual data so the actual data is kept untouched.
//   }
//   setEvents = () => {
//     let tempEvents = [];
//     Events.forEach((item) => {
//       const singleItem = { ...item }; //copying the values present in item and not referencing it.
//       tempEvents = [...tempEvents, singleItem];
//     });
//     this.setState(() => {
//       return { events: tempEvents };
//     });
//   };
//   //get the list of category types

//   filterItem = (category) => {
//     // let tempEvents = [];
//     // Events.forEach((item) => {
//     //   const singleItem = { ...item }; //copying the values present in item and not referencing it.
//     //   tempEvents = [...tempEvents, singleItem];
//     // });
//     if (category === "All") {
//       this.setState(() => {
//         this.setEvents();
//         // return { events: Events };
//       });
//       // this.setEvents(Events);
//       // return;
//     }
//     console.log(Events);
//     const updatedList = Events.filter((curElem) => {
//       return curElem.category === category; //only those data is filtered whose category matches with the input category
//     });
//     // this.setEvents(updatedList); //this will put the value of updated list in setEvents  which in turn change the value of eventsData and only updatedlist values will be displayed
//     this.setState({
//       events: updatedList,
//     });
//     console.log(updatedList);
//   };

//   //function to get items of particular id
//   getItem = (id) => {
//     const event = this.state.events.find((item) => item.id === id);
//     return event;
//   };

//   handleDetail = (id) => {
//     const event = this.getItem(id);
//     this.setState(() => {
//       return { detailEvent: event }; ///change the detail product to product in state object so that the clicked product details is shown.
//     });
//   };

//   render() {
//     return (
//       <EventContext.Provider
//         value={{
//           ...this.state,
//           //used 'this' keyword since handleDetail is present inside a class
//           handleDetail: this.handleDetail,
//           filterItem: this.filterItem,
//         }}
//       >
//         {this.props.children}
//         {/*this will get all the components present inside provider component */}
//       </EventContext.Provider>
//     );
//   }
// }
// const EventConsumer = EventContext.Consumer;

// export { EventProvider, EventConsumer };

//  useEffect(() => {
//   Axios.get(
//     "https://api.unsplash.com/photos?client_id=Oao6keF4wun5THuxZD4REm-dENk6g-AClOvwhp-eet4&per_page=30&pages=3"
//   ).then((data) => {
//     setDonator(data.data);
//     console.log(data);
//   });
// }, []);

import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("values", firstName);
    axios
      .post("https://worthysquad.herokuapp.com/api/user/signup", {
        firstName,
        lastName,
        password,
        email,
      })
      .then((response) => {
        // setName(response.data);
        // setLname(response.data);

        console.log(response.data, "success");
        history.push("/Login");
      })
      .catch((err) => console.error(err));
  };

  const history = useHistory();

  return (
    <div>
      <form
        // onSubmit={submit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          gap: "5px",
        }}
        method="post"
      >
        <input
          type="text"
          placeholder="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={submit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
