import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <section className="hero is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item title">
                  <div className="subHeading">
                  AMEIIM-2019
                  </div>
                </div>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <div className="font subtitle is-4">
                    Important Dates
                    </div>
                  </a>
                  <a className="navbar-item">
                    <div className="font subtitle is-4">
                      Submission Procedure
                    </div>
                  </a>
                  <a className="navbar-item">
                    <div className="font subtitle is-4">
                      About Us
                    </div>
                  </a>
                  <div className="navbar-item">
                    <a href="/">
                    <span className="tag is-success is-large">
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
        </div>


        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="title is-2 Heading">
                1st International Conference
            </div>
            <div className="subtitle is-3">
              <div className="subHeading">
                On
              </div>
            </div>

            <div className="title is-2 Heading">
              Advances in Mechanical Engineering, Industrial Informatics and Management
            </div>

            <div className="subtitle is-3 subHeading">
              13th-14th December 2019
            </div>
              <div className="button is-success is-large">
                <div className="font subtitle is-3 has-text-white">
                  Register
                </div>
              </div>
          </div>
        </div>
      </section>

          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="card">
                  <div className="card-heade level">
                    <div className="title is-2 subHeading card-header-title level-item">
                      <div className="has-text-centered">
                      Important Dates
                      </div>
                    </div>
                  </div>
                  <div className="card-content">

                    <div className="columns">
                      <div className="column">
                    <div className="font subtitle is-4 has-text-black">
                      Last Date Abstract submission:
                    </div>
                      </div>
                        <div className="column">
                    <div className="font subtitle is-4 has-text-black">
                      15th June 2019
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
                          30th June 2019
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
                </div>
              </div>
            </div>

            <div className="hero-foot">
              <div className="container has-text-centered">
              <div className="subtitle is-3 subHeading">
                Note
              </div>
                <div className="has-text-left">
                  <ol className="">
                    <li>
                      <div className="subHeading is-3">
                        Authors submitting Abstract only will be considered for
                        Poster Presentation & Publication in Conference Proceedings
                        after review.
                      </div>
                    </li>
                    <li>
                      <div className="subHeading is-4">
                        Authors submitting full paper will be considered for Oral
                        Presentation & Publication in AIP proceedings indexed in
                        Web of Science and Scopus subjected to peer review policy
                        and terms & conditions of publisher
                      </div>
                    </li>
                    <li>
                      <div className="subHeading is-4">
                        Plagiarism should be strictly avoided for final publication.
                        Plagiarized manuscripts may be rejected at any stage during
                        conference peer review/publication schedule etc.
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    );
  }
}

export default App;
