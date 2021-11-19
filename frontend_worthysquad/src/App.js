import React from "react";
import Header from "./Components/Header";
import { Switch, Route } from "react-router";
import EventDetails from "./Components/EventDetails";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Homepage from "./Homepage";
import MainList from "./Components/MainList";
import Donate from "./Components/Donate";
import Payment from "./Components/Payment";
import Volunteer from "./Components/Volunteer";
import About from "./Components/About";
import VolunteerList from "./Components/VolunteerList";
import DonorList from "./Components/DonorList";
// import Donatepage from "./Components/Donatepage";

// import { useStateValue } from "./Components/StateProvider";

const App = () => {
  // const [{ user }, dispatch] = useStateValue();

  return (
    <>
      {/* {!user ? (
        <Login />
      ) : (
        <> */}
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
        <Route path="/payment" component={Payment}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Switch>
    </>
    //   )}
    // </>
  );
};

export default App;

// .then((json) => this.setState({ events: json.data }));
