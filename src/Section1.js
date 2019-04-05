import React, { Component } from "react";

class Section1 extends Component {
  render() {
    return (
      <section id="home" className="section is-fullheight">
          <div className="container has-text-centered ">
            <div className="columns is-vcentered">
              <div className="column">
                <figure className="image">
                  <img alt="Submit" src={require("./img/landing.svg")} />
                </figure>
              </div>
              <div className="column">
                <div className="title is-3 heading">
                  1<sup>st</sup> International Conference
                </div>

                <div className="subtitle is-4">
                  <div className="subHeading">On</div>
                </div>

                <div className="title is-4 has-text-black heading">
                  Advances in Mechanical Engineering Industrial Informatics and
                  Management
                </div>

                <div className="subtitle is-4 subHeading">
                  13th-14th December 2019
                </div>

                <a href="#register">
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
    );
  }
}
export default Section1;
