import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Navbar from "./common/Navbar";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = { loaded: true };
  }

  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      3500
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }
  render() {
    if (!this.state.loading)
      return (
        <Router>
            <Navbar/>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus/" component={AboutUs} />
            <Footer />
        </Router>
      );
    else
      return (
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <Loader type="Puff" color="#7FCF6F" height="100" width="100" />
            </div>
          </div>
        </div>
      );
  }
}

export default App;
