import React, { Component } from "react";

class Section3 extends Component {
  render() {
    return (
      <section id="register" className="hero is-fullheight">
        <div className="hero-head">
          <div className="container has-text-centered">
            <div className="title is-2 heading">Submission Procedure</div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column">
                <div className="font subtitle is-4 has-text-centered">
                  Abstract and full length paper need to be submitted through
                  the EasyChair web-portal using the following{" "}
                  <a href="https://easychair.org/conferences/?conf=ameiim2019">
                    link
                  </a>{" "}
                  or Authors can also submit the abstracts using email with the
                  following{" "}
                  <a href="mailto:ameiim2019@gmail.com">email-address</a>. Full
                  contact information (name, affiliation, email ID and and
                  Tel/Fax number) of the corresponding author should be provided
                  in the email. Ready to register click the button below to
                  proceed.
                </div>
                <div className="columns">
                  <div className="column has-text-centered">
                    <a href="https://easychair.org/conferences/?conf=ameiim2019">
                      <figure className="image">
                        <img
                          alt="Submit"
                          src={require("./img/easychair.png")}
                          style={{ height: 70, width: 262, margin: 20}}
                        />
                          <div className="button is-success is-large">
                              <div className="font subtitle is-3 has-text-white">
                                  Register
                              </div>
                          </div>
                      </figure>
                    </a>
                  </div>
                    <div className="column">

                    </div>
                </div>
              </div>
              <div className="column">
                <figure className="image">
                  <img alt="Submit" src={require("./img/submit.svg")} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Section3;
