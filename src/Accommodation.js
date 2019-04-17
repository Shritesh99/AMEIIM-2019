import React, { Component } from "react";

class Accommodations extends Component {
  render() {
    return (
      <section id="committee" className="hero section">
        <div className=" has-text-centered">
          <a href="#">
            <div className="button is-success is-large">
              <div className="font subtitle is-4 has-text-white">
                Download Brochure
              </div>
            </div>
          </a>
        </div>
        <br />
        <div className="hero-head">
          <div className="container has-text-centered">
            <div className="title is-3 heading">
              Accommodation arranged for the participants
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <div className="font subtitle is-4 has-text-black">
                      <a
                        href="http://www.nitrr.ac.in/guest_house.php"
                        className="has-text-black und"
                        target="_blank"
                      >
                        Institute Guest House:
                      </a>
                    </div>
                  </div>
                  <div className="column">
                    <div className="font subtitle is-4">
                      <a href="mainto:guesthouse@nitrr.ac.in">
                        <i className="fas fa-envelope fa-lg" />
                        {"  "}
                        guesthouse@nitrr.ac.in
                      </a>
                    </div>
                  </div>
                </div>
                <br />
                <div className="columns">
                  <div className="column">
                    <div className="font subtitle is-4 has-text-black">
                      Boys hostel:
                      <br />
                    </div>
                  </div>
                  <div className="column">
                    <div className="font subtitle is-4">
                        Dr. XXXXXXXXXX<br/>
                        Warden <br/>
                        <a href="tel:+91XXXXXXXXXX"><i className="fas fa-phone fa-lg" />{"  "}+91-XXXXXXXXXX </a><br/>
                        <a href="mainto:xxxxxxx@nitrr.ac.in">
                        <i className="fas fa-envelope fa-lg" />
                        {"  "}
                            xxxxxxxxx@nitrr.ac.in</a> <br/>
                        Nearly 10 seats are available.<br />
                    </div>
                  </div>
                </div>
                <br />
                <div className="columns">
                  <div className="column">
                    <div className="font subtitle is-4 has-text-black">
                      Ladies hostel:
                      <br />
                    </div>
                  </div>
                  <div className="column">
                    <div className="font subtitle is-4">
                        Dr. XXXXXXXXXX<br/>
                        Warden <br/>
                        <a href="tel:+91XXXXXXXXXX"><i className="fas fa-phone fa-lg" />{"  "}+91-XXXXXXXXXX </a><br/>
                        <a href="mainto:xxxxxxxxxx@nitrr.ac.in">
                            <i className="fas fa-envelope fa-lg" />
                            {"  "}
                            xxxxxxxxx@nitrr.ac.in</a> <br/>
                      Only 2 double seated rooms are available<br/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Accommodations;
