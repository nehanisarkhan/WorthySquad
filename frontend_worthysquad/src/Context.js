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

import React, { Component } from "react";
import { Events, detailEvent } from "./data";

const EventContext = React.createContext(); //context object
//context object has two components :-
//Provider
//Consumer

class EventProvider extends Component {
  //state a unique reference throughout the app

  state = {
    events: [],
    detailEvent: detailEvent,
    list: this.uniqueList,
  };
  //component lifecycle method
  componentDidMount() {
    this.setEvents(); //this will ensure only the copies of data is mounted and not the actual data so the actual data is kept untouched.
  }
  setEvents = () => {
    let tempEvents = [];
    Events.forEach((item) => {
      const singleItem = { ...item }; //copying the values present in item and not referencing it.
      tempEvents = [...tempEvents, singleItem];
    });
    this.setState(() => {
      return { events: tempEvents };
    });
  };
  //get the list of category types
  uniqueList = [
    ...new Set(
      Events.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];

  filterItem = (category) => {
    if (category === "All") {
      this.setEvents(Events);
      return;
    }
    const updatedList = this.events.filter((curElem) => {
      return curElem.category === category; //only those data is filtered whose category matches with the input category
    });
    this.setEvents(updatedList); //this will put the value of updated list in setEventsData which in turn change the value of eventsData and only updatedlist values will be displayed
  };

  //function to get items of particular id
  getItem = (id) => {
    const event = this.state.events.find((item) => item.id === id);
    return event;
  };

  handleDetail = (id) => {
    const event = this.getItem(id);
    this.setState(() => {
      return { detailEvent: event }; ///change the detail product to product in state object so that the clicked product details is shown.
    });
  };

  render() {
    return (
      <EventContext.Provider
        value={{
          ...this.state,
          //used 'this' keyword since handleDetail is present inside a class
          handleDetail: this.handleDetail,
        }}
      >
        {this.props.children}{" "}
        {/*this will get all the components present inside provider component */}
      </EventContext.Provider>
    );
  }
}
const EventConsumer = EventContext.Consumer;

export { EventProvider, EventConsumer };
