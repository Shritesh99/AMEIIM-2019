import React, { Component } from "react";

class Section2 extends Component {
  render() {
    return (
      <section id="dates" className="container section">
        <div className="has-text-centered">
          <div className="columns is-vcentered">
            <div className="column">
              <div className="card">
                <div className="card-header level">
                  <div className="title is-2 heading card-header-title level-item">
                    <div className="has-text-centered">Dates</div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="scroll-up">
                    <p id="up">
                      <div className="content">

                        <div className="columns">
                          <div className="column">
                            <div className="font subtitle is-4 has-text-black">
                              Last Date Abstract submission:
                            </div>
                          </div>
                          <div className="column">
                            <div className="font subtitle is-4 has-text-black">
                              15th July 2019
                            </div>
                          </div>
                        </div>

                        <div className="columns">
                          <div className="column">
                            <div className="font subtitle is-4">
                              Notification of Abstract Acceptance:
                            </div>
                          </div>
                          <div className="column">
                            <div className="font subtitle is-4">
                              30th July 2019
                            </div>
                          </div>
                        </div>

                        <div className="columns">
                          <div className="column">
                            <div className="font subtitle is-4">
                              Full Paper Submission:
                            </div>
                          </div>
                          <div className="column">
                            <div className="font subtitle is-4">
                              13th August 2019
                            </div>
                          </div>
                        </div>

                        <div className="columns">
                          <div className="column">
                            <div className="font subtitle is-4 has-text-black">
                              Final Acceptance Notification:
                            </div>
                          </div>
                          <div className="column">
                            <div className="font subtitle is-4 has-text-black">
                              6th October 2019
                            </div>
                          </div>
                        </div>

                        <div className="columns">
                          <div className="column">
                            <div className="font subtitle is-4">
                              Early Bird Registration Starts:
                            </div>
                          </div>
                          <div className="column">
                            <div className="font subtitle is-4">
                              13th October 2019
                            </div>
                          </div>
                        </div>

                        <div className="columns">
                          <div className="column">
                            <div className="font subtitle is-4 has-text-black">
                              Early Bird Registration Ends:
                            </div>
                          </div>
                          <div className="column">
                            <div className="font subtitle is-4 has-text-black">
                              13th November 2019
                            </div>
                          </div>
                        </div>

                      </div>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <figure className="image">
                <img alt="Submit" src={require("./img/dates.svg")} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Section2;
