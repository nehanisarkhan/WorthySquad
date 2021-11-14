import React from "react";
import Header from "./Components/Header";
// import EventList from "./Components/EventList";
import { Switch, Route } from "react-router";
import EventDetails from "./Components/EventDetails";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Homepage from "./Homepage";
import MainList from "./Components/MainList";
import Location from "./Location";

const App = () => {
  return (
    <>
      <Location />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/eventlist" component={MainList}></Route>
        <Route path="/eventdetails" component={EventDetails}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
      </Switch>
    </>
  );
};

export default App;
