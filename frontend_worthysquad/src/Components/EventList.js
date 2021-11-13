import React from "react";
import Event from "./Event";
// import Category from "./Category";
import { EventConsumer } from "../Context";

const EventList = () => {
  return (
    <>
      <div className="container p-5 m-5 g-5 ">
        <div className="row g-5">
          <EventConsumer>
            {(value) => {
              return value.events.map((event) => {
                return <Event key={event.id} event={event} />;
              });
            }}
          </EventConsumer>
        </div>
      </div>
    </>
  );
};

export default EventList;

// <Category filterItem={value.filterItem} list={value.list} />;
