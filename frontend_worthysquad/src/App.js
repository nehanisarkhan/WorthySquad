import React from "react";
import Header from "./Components/Header";
import EventList from "./Components/EventList";
import { Switch, Route } from "react-router";
import EventDetails from "./Components/EventDetails";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Homepage from "./Homepage";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/eventlist" component={EventList}></Route>
        <Route path="/eventdetails" component={EventDetails}></Route>
      </Switch>
    </>
  );
};

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Header";
// import Sponsors from "./Components/Sponsors";
// import Carousel1 from "./Components/Carousel1";
// import "./Components/Carousel1";
// import { Button } from "react-bootstrap";
// import { FooterContainer } from "./containers/footer";

// // import Footer from "./Components/Footer";
// // import "./Components/Footer";

// // import EventDetails from "./Components/EventDetails";
// // import Navbar from "./Components/Navbar";

// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <div>
//         <Carousel1 />

//         <div className="Container">
//           <Sponsors />
//           <br />
//           <div>
//             <h2>Join Us</h2>
//             <Button>Donate</Button> <Button>Volunteer</Button>
//             {/* <Footer /> */}
//             <br />
//             <br />
//             <br />
//             <br />
//             <>
//               <FooterContainer />
//             </>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React from 'react'
// import Homepage from './Homepage'

// function App() {
//   return (
//     <div>
//       <Homepage/>
//     </div>
//   )
// }

// >>>>>>> master
export default App;
