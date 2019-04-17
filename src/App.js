import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Committee from "./Committee";
import Navbar from "./common/Navbar";
import Footer from "./Footer";
import Accommodations from "./Accommodation";
import Reach from "./Reach";
import Papers from "./Papers";
import Speaker from "./Speakers";
import Register from "./Register";


class App extends Component {
  render() {
      return (
        <Router>
            <Navbar/>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/speakers" exact component={Speaker} />
            <Route path="/papers" exact component={Papers} />
            <Route path="/reach" exact component={Papers} />
            <Route path="/committee" exact component={Committee} />
            <Route path="/conference" component={Reach} />
            <Route path="/accommodations" component={Accommodations} />
            <Route path="/aboutus" component={AboutUs} />
            <Footer />
        </Router>
      );
  }
}

export default App;
