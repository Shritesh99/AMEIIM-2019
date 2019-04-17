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
          <br/>
        <div className="hero-head">
          <div className="container has-text-centered">
            <div className="title is-3 heading">
              Accommodation arranged for the participants
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
              <div className="font subtitle is-4 has-text-black">
                  <a href="http://www.nitrr.ac.in/guest_house.php" className="has-text-black" target="_blank"> Institute Guest House</a>
              </div>
            <div className="font subtitle is-4">
                Contact Details:
                <br/><a href="mainto:guesthouse@nitrr.ac.in">guesthouse@nitrr.ac.in</a>
            </div>
              <br/>
              <div className="font subtitle is-4 has-text-black">
                  Boys hostel<br/>
              </div>
              <div className="font subtitle is-4">
                  Nearly 10 seats are available.
              </div>
            <br/>
            <div className="font subtitle is-4 has-text-black">
                Ladies hostel<br/>
            </div>
            <div className="font subtitle is-4">
                Only 2 double seated rooms are available
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Accommodations;
