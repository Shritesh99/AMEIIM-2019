import React, { Component } from "react";

class Reach extends Component {
  render() {
    return (
      <section id="committee" className="section hero">
        <div className="hero-head">
          <div className="container has-text-centered">
            <div className="title is-2 heading">How to reach NIT Raipur</div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <div className="font subtitle is-4 has-text-left">
                  <a
                    href="http://www.nitrr.ac.in/viewdetails.php?q=mech.jagadish"
                    target="_blank"
                    className="has-text-grey-dark"
                  >
                    Dr. Jagadish
                  </a>
                  <br />
                  Assistant Professor <br />
                  Dept. of Mechanical Engineering
                  <br />
                  NIT Raipur
                  <br />
                  <a
                    href="mailto:jagadish.mech@nitrr.ac.in"
                    className="has-text-link"
                  >
                    jagadish.mech@nitrr.ac.in
                  </a>
                </div>
                <div className="font subtitle is-4 has-text-left">
                  <a
                    href="http://www.nitrr.ac.in/viewdetails.php?q=me.smukti"
                    target="_blank"
                    className="has-text-grey-dark"
                  >
                    Dr. Suraj Kumar Mukti
                  </a>
                  <br />
                  Assistant Professor <br />
                  Dept. of Mechanical Engineering
                  <br />
                  NIT Raipur
                  <br />
                  <a
                    href="mailto:skmukti.mech@nitrr.ac.in"
                    className="has-text-link"
                  >
                    skmukti.mech@nitrr.ac.in
                  </a>
                </div>
              </div>
              <div className="column">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.549083149826!2d81.6028350502894!3d21.24972218580982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational+Institute+of+Technology%2C+Raipur!5e0!3m2!1sen!2sin!4v1555398530645!5m2!1sen!2sin"
                  style={{ width: 1000, height: 350 }}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <div
                className="font subtitle is-3 has-text-left has-text-black"
                style={{ textDecorationLine: "underline" }}
              >
                Reaching NIT Raipur
              </div>
            </div>
            <br />
            <div>
              <div className="font subtitle is-4 has-text-justified">
                NIT Raipur, is situated on the trunk line connecting Bombay and
                Howrah at a distance 831 Km from Howrah and 311 Km from Nagpur
                on the national highway 6. The location of this institute is in
                the vicinity of Bhilai steel plant. Raipur is well connected
                through Air-Routes from Mumbai, New Delhi, Chennai,
                Bhubaneshwar, Vizag, Nagpur and Kolkata.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Reach;
