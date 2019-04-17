import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import Navbar2 from "./common/Navbar2";

class Section1 extends Component {
  render() {
    const properties = {
      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    };
    return (<div>
      <Navbar2/>
      <section id="home" className="section hero is-fullheight">
          <div className="container has-text-centered ">
            <div className="columns is-vcentered">
              <div className="column">
                <Slide {...properties} style={{ width: 550, height: 400}}>
                  <div className="each-slide">
                  <img alt="Submit" style={{ width: 1000, height: 400}} src={require("./img/Nitrr.jpeg")} />
                  </div>
                    <div className="each-slide">
                      <img alt="Submit" style={{ width: 1000, height: 400}} src={require("./img/nit.jpeg")} />
                    </div>
                </Slide>
              </div>
              <div className="column">
                <div className="title is-3 heading">
                  1<sup>st</sup> International Conference
                </div>

                <div className="subtitle is-4">
                  <div className="subHeading">On</div>
                </div>

                <div className="title is-4 has-text-black heading">
                  Advances in Mechanical Engineering, Industrial Informatics and
                  Management
                </div>

                <div className="subtitle is-4 subHeading">
                  13<sup>th</sup>-14<sup>th</sup> December 2019
                </div>

                <a href="/register">
                  <div className="button is-success is-large">
                    <div className="font subtitle is-4 has-text-white">
                      Register
                    </div>
                  </div>
                </a>
                <br />
                <a href="#">
                  <div
                    className="button is-success is-large"
                    style={{ margin: 15 }}
                  >
                    <div className="font subtitle is-4 has-text-white">
                      Download Brochure
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </section>
        </div>
    );
  }
}
export default Section1;
