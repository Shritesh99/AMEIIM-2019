import React, { Component } from "react";

class Section3 extends Component {
  render() {
    return (
      <section id="register" className=" is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column">
                <div className="font subtitle is-4 has-text-justified">
                  Abstract and full length paper need to be submitted through the Easy chair Conference papers submission web-portal. Those who do not have an easy chair account will need to create one
                </div>
                <div className="columns">
                  <div className="column has-text-centered">
                    <a href="https://easychair.org/conferences/?conf=ameiim2019">
                        <img
                          alt="Submit"
                          src={require("./img/easychair.png")}
                          style={{ height: 70, width: 262, margin: 20}}
                        />
                      <div className="button is-success is-large">
                        <div className="font subtitle is-4 has-text-white">
                          Submit Through Easychair
                        </div>
                      </div>
                    </a>
                  </div>
                    <div className="column">

                    </div>
                </div>
                <div style={{ padding: 10}}>
                  <div
                      className="has-text-centered"
                      style={{ backgroundColor: "#7FCF6F" }}
                  >
                    <marquee onMouseover="this.stop()" onmouseout="this.start()" scrollamount="4" behavior="scroll" direction="left">
                      <div className="font subtitle is-4 has-text-white">
                        All the accepted papers will be published in Springer (Scopus Indexed) & Industrial Engineering Journal and / Udyog Pragati: The Journal for Practicing Managers
                      </div>
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Section3;
