import React from "react";
// import Event from "./Event";
import Category from "./Category";
import { EventConsumer } from "../Context";
import EventList from "./EventList";

const MainList = () => {
  return (
    <>
      <div className="container p-5 m-5 g-5">
        <EventConsumer>
          {(value) => {
            return <Category list={value.list} />;
          }}
        </EventConsumer>
        <EventList />
      </div>
    </>
  );
};

export default MainList;
