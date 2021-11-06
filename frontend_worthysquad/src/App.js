import React from "react";
import Header from "./Components/Header";
import EventList from "./Components/EventList";
// import { Switch, Route } from "react-router";
// import EventDetails from "./Components/EventDetails";

const App = () => {
  return (
    <>
      <Header />
      <EventList />
      {/* <EventDetails /> */}
      {/* <Switch>
        <Route exact path="/eventDetails" component={EventDetails}></Route>
      </Switch> */}
    </>
  );
};
export default App;
