import React, { Component } from "react";

class Navbar2 extends Component {
  render() {
    return (
      <div className="hero-head" style={{ marginTop: 30}}>
        <div className="columns">
          <div className="column has-text-right has-text-centered-mobile is-two-fifths">
              <img alt="Submit" style={{ width: 150, height: 170}} src={require("../img/logo1.jpeg")} />
          </div>
          <div className="column has-text-left">
              <img alt="Submit" style={{ width: 600, height: 100, marginTop: 35}} src={require("../img/Letter HEad.JPG")} />
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar2;
