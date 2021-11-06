// const getItem = (id) => {
//   //function to get items of particular id
//   const event = events.find((item) => item.id === id);
//   return event;
// };

// const handleDetail = (id) => {
//   const event = getItem(id);
//   setEvents(() => {
//     return { detailEvent: event }; ///change the detail product to product in state object so that the clicked product details is shown.
//   });
// };
import React from "react";

const EventContext = React.createContext(); //context object
//context object has two components :-
//Provider
//Consumer

const EventProvider = () => {
  return <div></div>;
};

const EventConsumer = EventContext.Consumer;

export { EventProvider, EventConsumer };
