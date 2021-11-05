import React, { useState } from "react";
import Event from "./Event";
import { Events } from "../data";
const EventList = () => {
  const [events] = useState(Events);
  return (
    <>
      <div className="container p-5 m-5 g-5 ">
        <div className="row g-5">
          <Event key={events.id} events={events} />
        </div>
      </div>
    </>
  );
};

export default EventList;
