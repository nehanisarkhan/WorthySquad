import React from "react";
import Header from "./Components/Header";
// import EventList from "./Components/EventList";
import { Switch, Route } from "react-router";
import EventDetails from "./Components/EventDetails";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Homepage from "./Homepage";
import MainList from "./Components/MainList";
// import Location from "./Location";
import Donate from "./Components/Donate";
import Volunteer from "./Components/Volunteer";
import About from "./Components/About";
import DonorList from "./Components/DonorList";
import VolunteerList from "./Components/VolunteerList";

const App = () => {
  return (
    <>
      {/* <Location /> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/eventlist" component={MainList}></Route>
        <Route path="/eventdetails" component={EventDetails}></Route>
        <Route path="/donate" component={Donate}></Route>
        <Route path="/donatorlist" component={DonorList}></Route>
        <Route path="/volunteer" component={Volunteer}></Route>
        <Route path="/volunteerlist" component={VolunteerList}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
      </Switch>
    </>
  );
};

export default App;
