import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar" style={{ marginTop: 10 }}>
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">
                <figure className="image is-48x48">
                  <img alt="Submit" src={require("../img/logo.svg")} />
                </figure>
              </Link>
              <Link className="navbar-item" to="/">
                <div className="title">
                  <div className="subHeading">AMEIIM-2019</div>
                </div>
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="#dates" className="navbar-item">
                    <div className="font subtitle is-5">DATES</div>
                </a>
                <Link to="/committee" className="navbar-item">
                  <div className="font subtitle is-5">COMMITTEE</div>
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/conference" className="navbar-item ">
                  <div className="font subtitle is-5">CONFERENCE</div>
                </Link>

                  <div className="navbar-dropdown">
                    <Link to="/speakers" class="navbar-item">
                      KEYNOTE SPEAKERS
                    </Link>
                    <Link to="/papers" class="navbar-item">
                      CALL FOR PAPERS
                    </Link>
                    <Link to="/reach" class="navbar-item">
                      HOW TO REACH NIT RAIPUR
                    </Link>
                  </div>

                </div>
                <Link to="/accommodation" className="navbar-item">
                  <div className="font subtitle is-5">ACCMODATIONS</div>
                </Link>
                <Link to="/aboutus" className="navbar-item">
                  <div className="font subtitle is-5">ABOUT US</div>
                </Link>
                <div className="navbar-item">
                  <Link to="/register">
                    <span className="button is-success is-medium">
                      <div className="font subtitle is-4 has-text-white">
                        Register
                      </div>
                    </span>
                  </Link>
                </div>
                <div className="navbar-item">
                  <a href="https://easychair.org/conferences/?conf=ameiim2019">
                    <span className="button is-success is-medium">
                      <div className="font subtitle is-4 has-text-white">
                        Submit Papers
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
                      Last Date Abstract submission: 15<sup>th</sup> July 2019
                    </div>
                 </marquee>
              </div>
          </div>

      </div>
    );
  }
}
export default Navbar;
