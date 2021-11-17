import React, { Component } from "react";
import { Events, detailEvent } from "./data";

const uniqueList = [
  ...new Set(
    Events.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const EventContext = React.createContext(); //context object

class EventProvider extends Component {
  state = {
    events: [],
    detailEvent: detailEvent,
    list: uniqueList,
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

  filterItem = (category) => {
    // let tempEvents = [];
    // Events.forEach((item) => {
    //   const singleItem = { ...item }; //copying the values present in item and not referencing it.
    //   tempEvents = [...tempEvents, singleItem];
    // });
    if (category === "All") {
      this.setState(() => {
        this.setEvents();
        // return { events: Events };
      });
      // this.setEvents(Events);
      // return;
    }
    console.log(Events);
    const updatedList = Events.filter((curElem) => {
      return curElem.category === category; //only those data is filtered whose category matches with the input category
    });
    // this.setEvents(updatedList); //this will put the value of updated list in setEvents  which in turn change the value of eventsData and only updatedlist values will be displayed
    this.setState({
      events: updatedList,
    });
    console.log(updatedList);
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
          filterItem: this.filterItem,
        }}
      >
        {this.props.children}
        {/*this will get all the components present inside provider component */}
      </EventContext.Provider>
    );
  }
}
const EventConsumer = EventContext.Consumer;

export { EventProvider, EventConsumer };

//  useEffect(() => {
//   Axios.get(
//     "https://api.unsplash.com/photos?client_id=Oao6keF4wun5THuxZD4REm-dENk6g-AClOvwhp-eet4&per_page=30&pages=3"
//   ).then((data) => {
//     setDonator(data.data);
//     console.log(data);
//   });
// }, []);
