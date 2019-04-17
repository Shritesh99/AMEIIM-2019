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
                  <div style={{backgroundColor: "#7FCF6F", padding: 5 }}>
                    <a
                        href="http://www.nitrr.ac.in/viewdetails.php?q=me.smukti"
                        target="_blank"
                        className="has-text-white und"
                    >
                      <div className="has-text-white"> Dr. Suraj Kumar Mukti</div>
                    </a>
                  </div>
                  Assistant Professor <br />
                  Dept. of ME
                  <br />
                  NIT Raipur
                  <br />
                  <a href="tel:+919302837666"><i className="fas fa-phone fa-lg" />{"  "}+91-9302837666</a>
                  <br />
                  <a
                      href="mailto:skmukti.mech@nitrr.ac.in"
                      className="has-text-link"
                  ><i className="fas fa-envelope fa-lg" />
                    {"  "}
                    skmukti.mech@nitrr.ac.in
                  </a>
                </div>

                <div className="font subtitle is-4 has-text-left">

                  <div style={{backgroundColor: "#7FCF6F", padding: 5 }}>
                    <a
                        href="http://www.nitrr.ac.in/viewdetails.php?q=mech.jagadish"
                        target="_blank"
                        className="has-text-white und"
                    >
                      <div className="has-text-white">Dr. Jagadish</div>
                    </a>
                  </div>
                  Assistant Professor <br />
                  Dept. of Mechanical Engineering
                  <br />
                  NIT Raipur
                  <br />
                  <a href="tel:+918811940517"><i className="fas fa-phone fa-lg" />{"  "}+91-8811940517</a>
                  <br />
                  <a
                    href="mailto:jagadish.mech@nitrr.ac.in"
                    className="has-text-link"
                  ><i className="fas fa-envelope fa-lg" />
                    {"  "}
                    jagadish.mech@nitrr.ac.in
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
            <div className="font subtitle is-4 has-text-justified">
              NIT Raipur, is situated on the trunk line connecting Bombay and
              Howrah at a distance 831 Km from Howrah and 311 Km from Nagpur on
              the national highway 6. The location of this institute is in the
              vicinity of Bhilai steel plant. Raipur is well connected through
              followings ways.
            </div>
            <div className="card">
              <div className="card-content">
                <div className="columns">
                  <div className="column has-text-centered">
                    <div
                      className="font subtitle is-3 has-text-black"
                      style={{ textDecorationLine: "underline" }}
                    >
                      AIR
                    </div>
                    <img alt="Submit" src={require("./img/air.png")} /> <br/>
                    <div className="font subtitle is-4 has-text-justified">
                      There are daily direct flights from Raipur to other cities of India. Many Airways operate flights from
                      Mumbai, New Delhi, Hydrabad, Kolkata, Banglore, Indore, Rainci, Bhubaneshwar, etc to Raipur. From airport, the Institute campus is
                      approximately 12 KMs. Hired private taxi service is
                      availabe from the airport. Full taxi hire charge to NIT
                      campus is approximately Rs. 600 to Rs. 650.
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <div
                      className="font subtitle is-3 has-text-black"
                      style={{ textDecorationLine: "underline" }}
                    >
                      RAIL
                    </div>
                    <img alt="Submit" src={require("./img/rail.png")} /> <br/>
                    <div className="font subtitle is-4 has-text-justified">
                      Raipur has direct rail link with the Mumbai, Kolkata, New Delhi, Chennai, Bhubaneshwar, Vizag and Nagpur. Many
                      daily train services run between Raipur to above mentioned cities. The
                      campus is around 6 KMs from the Raipur Railway Station.
                      Preferrd mode of transportation to NIT campus is
                      Auto-Rikshaw/OLA/Private Taxi (fare approx. Rs. 200).
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <div
                      className="font subtitle is-3 has-text-black"
                      style={{ textDecorationLine: "underline" }}
                    >
                      ROAD
                    </div>
                    <img alt="Submit" src={require("./img/road.png")} /> <br/>
                    <div className="font subtitle is-4 has-text-justified">
                      Raipur is well connected with various cities via road. A
                      large number of bus ply between Nagpur and Raipur
                      everyday. After you arrive at Central Bus Stand of Raipur,
                      you could take a taki for NIT Campus (fare approx. Rs.
                      200-250)
                    </div>
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
export default Reach;
