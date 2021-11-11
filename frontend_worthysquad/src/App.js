import React from "react";
import Header from "./Components/Header";
import EventList from "./Components/EventList";
// import { Switch, Route } from "react-router";
import EventDetails from "./Components/EventDetails";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <>
      <SignUp />
      {/* <Login /> */}
      {/* <Header />
      <EventList />
      <EventDetails /> */}
      {/* <Switch>
        <Route exact path="/eventDetails" component={EventDetails}></Route>
      </Switch> */}
    </>
  );
};
export default App;
