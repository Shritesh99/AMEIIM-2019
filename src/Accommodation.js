import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Accommodations extends Component {
  render() {
    return (
      <section id="committee" className="hero section">
        <div className=" has-text-centered">
          <Link to="#">
            <div className="button is-success is-large">
              <div className="font subtitle is-4 has-text-white">
                Download Brochure
              </div>
            </div>
          </Link>
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
                      <Link
                        to="http://www.nitrr.ac.in/guest_house.php"
                        className="has-text-black und"
                        target="_blank"
                      >
                        Institute Guest House:
                      </Link>
                    </div>
                  </div>
                  <div className="column">
                    <div className="font subtitle is-4">
                      <Link to="mainto:guesthouse@nitrr.ac.in">
                        <i className="fas fa-envelope fa-lg" />
                        {"  "}
                        guesthouse@nitrr.ac.in
                      </Link>
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
                        <Link to="tel:+91XXXXXXXXXX"><i className="fas fa-phone fa-lg" />{"  "}+91-XXXXXXXXXX </Link><br/>
                        <Link to="mainto:xxxxxxx@nitrr.ac.in">
                        <i className="fas fa-envelope fa-lg" />
                        {"  "}
                            xxxxxxxxx@nitrr.ac.in</Link> <br/>
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
                        <Link to="tel:+91XXXXXXXXXX"><i className="fas fa-phone fa-lg" />{"  "}+91-XXXXXXXXXX </Link><br/>
                        <Link to="mainto:xxxxxxxxxx@nitrr.ac.in">
                            <i className="fas fa-envelope fa-lg" />
                            {"  "}
                            xxxxxxxxx@nitrr.ac.in</Link> <br/>
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
