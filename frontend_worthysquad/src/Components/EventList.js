import React, { useState } from "react";
import Event from "./Event";
import { Events } from "../data";
import Category from "./Category";

//get the list of category types
const uniqueList = [
  ...new Set(
    Events.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const EventList = () => {
  const [eventsData, setEventsData] = useState(Events);
  const [list, setList] = useState(uniqueList); //list will have one unique category assigned to it

  const filterItem = (category) => {
    if (category === "All") {
      setEventsData(Events);
      return;
    }
    const updatedList = eventsData.filter((curElem) => {
      return curElem.category === category; //only those data is filtered whose category matches with the input category
    });
    setEventsData(updatedList); //this will put the value of updated list in setEventsData which in turn change the value of eventsData and only updatedlist values will be displayed
  };
  return (
    <>
      <div className="container p-5 m-5 g-5 ">
        <div className="row g-5">
          <Category filterItem={filterItem} list={list} />
          <Event events={eventsData} key={eventsData.id} />
        </div>
      </div>
    </>
  );
};

export default EventList;
