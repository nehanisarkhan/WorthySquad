import React from "react";
// import Event from "./Event";
import Category from "./Category";
import { EventConsumer } from "../Context";
import EventList from "./EventList";

const MainList = () => {
  return (
    <>
      <div className="container p-5 m-5 g-5">
        <div className="row g-5">
          <EventConsumer>
            {(value) => {
              // return value.list.map((lists) =>
              return <Category list={value.list} />;

              // return value.events.map((event) => {
              //   return <Event key={event.id} event={event} />;
              // });
            }}
          </EventConsumer>
          <EventList />
        </div>
      </div>
    </>
  );
};

export default MainList;
