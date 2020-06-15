import React, { Component } from "react";
import "./App.css";
// import { Router, Link } from "@reach/router";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavbarMain from "./components/Navbar";
import Home from './components/Home';
// import Events from "./components/Events";

// import Footer from "./components/Footer";






class App extends Component {
  render() {
    return (
      // <div className="App">
      <Router>
        <NavbarMain />
        <Route exact path="/" ><Home/></Route>
        {/* <Route exact path="/events"><Events/></Route> */}
        {/* <Route exact path="/about_us"><Aboutus/></Route> */}
        {/* <Route exact path="/team" ><Team/></Route> */}
        {/* <Route exact path="/services" ><Services/></Route> */}
        {/* <Route exact path="/contact" ><Contact/></Route> */}
        {/* <Route exact path="/coreteam" ><Coreteam/></Route> */}
        {/* <Route exact path="/self" ><Selfs/></Route> */}
{/* <Footer/> */}

        {/* </div> */}
      </Router>
    );
  }
}

export default App;
