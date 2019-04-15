import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar" style={{ marginTop: 10 }}>
          <div className="container">
            <div className="navbar-brand">
              <a href="#home">
                <figure className="image is-48x48">
                  <img alt="Submit" src={require("../img/logo.svg")} />
                </figure>
              </a>
              <a className="navbar-item" href="#home">
                <div className="title">
                  <div className="subHeading">AMEIIM-2019</div>
                </div>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="/#dates" className="navbar-item">
                    <div className="font subtitle is-5">DATES</div>
                </a>
                <a href="/committee" className="navbar-item">
                  <div className="font subtitle is-5">COMMITTEE</div>
                </a>
                <a href="/conference" className="navbar-item">
                  <div className="font subtitle is-5">CONFERENCE</div>
                </a>
                <a href="/accmodation" className="navbar-item">
                  <div className="font subtitle is-5">ACCMODATIONS</div>
                </a>
                <a href="/aboutus" className="navbar-item">
                  <div className="font subtitle is-5">ABOUT US</div>
                </a>
                <div className="navbar-item">
                  <a href="/#register">
                    <span className="button is-success is-medium">
                      <div className="font subtitle is-4 has-text-white">
                        Register
                      </div>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
          <div className="container" style={{ padding: 10}}>
              <div
                  className="has-text-centered"
                  style={{ backgroundColor: "#7FCF6F" }}
              >
                  <marquee onMouseover="this.stop()" onmouseout="this.start()" scrollamount="4" behavior="scroll" direction="left">
                    <div className="font subtitle is-4 has-text-white">
                      Last Date Abstract submission: 15th July 2019
                    </div>
                 </marquee>
              </div>
          </div>

      </div>
    );
  }
}
export default Navbar;
