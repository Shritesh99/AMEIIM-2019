import React, { Component } from "react";

class Conference extends Component {
  render() {
    return (
      <section id="committee" className="section hero">
        <div className="hero-head">
          <div className="container has-text-centered">
            <div className="title is-2 heading">
                    <a style={{ textDecorationLine: 'underline'}} href="/">
                        AMEIIM-2019
                    </a>
            </div>
          </div>
        </div>
        <div className="hero-body">
              <div className="hero-body">
                  <div className="container has-text-centered">
                      <div className="columns is-vcentered">
                          <div className="column">
                              <div className="font subtitle is-4 has-text-justified">
                                  On stepping into its successful 60th year, Department of
                                  Mechanical Engineering, NIT Raipur is organizing its 1st
                                  International Conference on Advances in Mechanical
                                  Engineering, Industrial Informatics and Management
                                  (AMEIIM-2019) on 13<sup>th</sup>-14<sup>th</sup> December, 2019 for deliberating
                                  with distinguished experts in this field. This invitation is
                                  open for all academicians, research scholars, post-docs, PG
                                  and UG students functioning in the relevant areas. It also
                                  provides a premier interdisciplinary platform for researchers,
                                  practitioners and educators to present and discuss the most
                                  recent innovations, trends, and concerns as well as practical
                                  challenges encountered and solutions adopted in relevant
                                  areas.
                              </div>
                          </div>
                          <div className="column has-text-right">
                              <figure className="image">
                                  <img alt="Submit" src={require("./img/logo4.jpeg")} />
                              </figure>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
export default Conference;
