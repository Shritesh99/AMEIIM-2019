import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Committee extends Component {
  render() {
    return (
      <section id="committee" className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="font subtitle is-3 has-text-black">
                  CHIEF PATRON
                </div>
                <div className="columns">
                  <div className="column has-text-centered">
                    <img
                      alt="Submit"
                      style={{ width: 150, height: 200 }}
                      src={require("./img/Dr_Rawani.jpeg")}
                    />
                    <div className="font subtitle is-4">
                      Prof. A. M. Rawani <br />
                      Director <br />
                      NIT Raipur
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <img
                      alt="Submit"
                      style={{ width: 200, height: 200 }}
                      src={require("./img/prof.karunajain.jpeg")}
                    />
                    <div className="font subtitle is-4">
                      Prof. (Ms) Karuna Jain <br />
                      Director <br />
                      NITIE Mumbai
                    </div>
                  </div>
                </div>

                <div className="font subtitle is-3 has-text-black">PATRON</div>
                <div className="font subtitle is-4 has-text-left">
                  Prof. Subhrata Gupta
                  <br /> Dean R&C <br />
                  NIT Raipur
                  <br />
                  <br />
                  Prof. Shirish Sangle
                  <br /> Dean-SRIC
                  <br /> NITIE Mumbai
                </div>
                <div className="font subtitle is-4 has-text-black">
                  GENERAL CHAIR
                </div>
                <div className="font subtitle is-4 has-text-left">
                  Prof. P. Y. Dhekne
                  <br /> Registrar
                  <br /> NIT Raipur <br /> <br />
                  Prof. Shrish Verma <br /> Dean Academics <br /> NIT Raipur{" "}
                  <br /> <br />
                  Prof. (Ms) A. B. Soni <br /> Dean FW, <br /> NIT Raipur <br />{" "}
                  <br />
                  Prof. P. Diwan <br /> Dean SW <br /> NIT Raipur <br /> <br />
                  Prof. G. D. Ramtekkar <br /> Dean P&D <br /> NIT Raipur <br />{" "}
                  <br />
                  Prof. Rakesh Raut <br /> Area Coordinator, OSC <br /> NITIE
                  Mumbai <br /> <br /> Prof. Rauf Iqbal <br /> PIC-EED <br />{" "}
                  NITIE Mumbai
                </div>
                <div className="font subtitle is-4 has-text-black">
                  ORGANIZING COMMITTEE CHAIRPERSON
                </div>
                <div className="font subtitle is-4 has-text-left">
                  Dr. Rahul Salhotra
                  <br /> HoD, Department of Mechanical Engineering
                  <br /> NIT Raipur <br />
                </div>

                <div className="font subtitle is-4 has-text-black">
                  ORGANIZING COMMITTEE SECRETARIES
                </div>
                <div className="font subtitle is-4 has-text-left">
                  Dr. Suraj Kumar Mukti
                  <br />
                  NIT Raipur
                  <br />
                  <br /> Dr. Jagadish
                  <br />
                  NIT Raipur
                  <br />
                  <br /> Dr. Nitin Jain
                  <br />
                  NIT Raipur
                  <br />
                </div>

                <div className="font subtitle is-4 has-text-black">
                  INTERNATIONAL / NATIONAL ADVISORY COMMITTEE
                </div>
                <div className="font subtitle is-4 has-text-left">
                  Dr. T. Sudharsan <br /> MEM, USA <br /> <br />
                  Dr. Kapil Gupta <br /> JU, RSA <br /> <br />
                  Dr. Aini Z.A.K <br /> UTM, Malaysia <br /> <br />
                  Dr. Mani Venkatesh <br /> MBS, France <br /> <br />
                  Dr. Hamed M Jassim <br /> SSE, UKH <br /> <br />
                  Prof. Jinil Persis <br /> NITIE Mumbai <br /> <br />
                  Prof. Balkrishna Narkhede <br /> NITIE Mumbai <br /> <br />
                  Prof. Rakesh Raut <br /> NITIE Mumbai <br /> <br />
                  Prof. Anju Singh <br /> NITIE Mumbai <br /> <br />
                  Prof. KVSS Narayana Rao <br /> NITIE Mumbai <br /> <br />
                  Prof. Milind Akarte <br /> NITIE Mumbai <br /> <br />
                  Dr. R.D.Mishra <br /> NIT Silchar <br /> <br />
                  Dr. P.K.Patwori <br /> NIT Silchar <br /> <br />
                  Dr. Biplab Das <br /> NIT Silchar <br /> <br />
                  Dr. Sumit Bhowmik <br /> NIT Silchar <br /> <br /> Dr. M. Ravi
                  Sankar <br /> IIT Guwahati <br /> <br /> Dr. U.S. Dixit <br />
                  IIT Guwahati <br /> <br /> Dr. Amitava Ray <br /> JEC,
                  Jalpaiguri <br />
                  <br />
                  Dr. R.K. Gupta <br /> MU, Jaipur <br /> <br />
                  Dr. P. Bangarubabu <br /> NIT Warangal <br /> <br />
                  Dr. Bijan Sarkar <br /> Jadavpur University <br /> <br /> Dr.
                  Veeresh Kumar G. B. <br /> NITAP
                </div>

                <div className="font subtitle is-4 has-text-black">
                  TECHNICAL COMMITTEE MEMBERS
                </div>
                <div className="font subtitle is-4 has-text-left">
                  Prof. S.L.Sinha <br /> NIT Raipur <br /> <br /> Prof. S.D.
                  Patle <br /> NIT Raipur <br /> <br /> Prof. S.P.S. Matharu{" "}
                  <br /> NIT Raipur <br />
                  <br /> Prof. A.K. Tiwari <br /> NIT Raipur <br /> <br /> Dr. R
                  K Yadav <br /> NIT Raipur <br /> <br /> Prof. G K Sahu <br />{" "}
                  NIT Raipur <br />
                  <br />
                  Dr. N. Jain <br /> NIT Raipur <br /> <br />
                  Dr. S. Bhowmick <br /> NIT Raipur <br /> <br />
                  Dr. N.V. Swamy Naidu <br /> NIT Raipur <br /> <br />
                  Dr. Satish Kr. Dewangan <br /> NIT Raipur <br /> <br /> Dr.
                  Vivek Kr. Gaba <br /> NIT Raipur <br /> <br />
                  Dr. Amit Raj Singh <br /> NIT Raipur <br /> <br />
                  Dr. S.Bhattacharya <br /> NIT Raipur <br /> <br />
                  Dr. G. Srinivasu, NIT Raipur <br /> <br />
                  Dr. Harendra Kr. Narang <br /> NIT Raipur <br /> <br /> Dr.
                  Nisha Netam <br /> NIT Raipur <br /> <br />
                  Dr. Raj Kr. Sahu <br /> NIT Raipur <br /> <br />
                  Dr. Mridul Singh Rajput <br /> NIT Raipur <br /> <br /> Dr.
                  Rajana Suresh Kumar <br /> NIT Raipur <br />
                  <br />
                </div>
              </div>

              <div className="column">
                <div className="font subtitle is-3 has-text-black">
                  ORGANIZING SECRETARIES
                </div>
                <br />
                <div className="columns">
                  <figure className="image">
                    <Link
                      to="http://www.nitrr.ac.in/viewdetails.php?q=me.smukti"
                      target="_blank"
                    >
                      <img
                        alt="Submit"
                        style={{ width: 150, height: 200 }}
                        src={require("./img/Dr_Mukti.jpeg")}
                      />
                    </Link>
                  </figure>
                  <div className="column">
                    <div className="font subtitle is-4 has-text-left">
                      <div style={{ backgroundColor: "#7FCF6F", padding: 5 }}>
                        <Link
                          to="http://www.nitrr.ac.in/viewdetails.php?q=me.smukti"
                          target="_blank"
                          className="has-text-white und"
                        >
                          <div className="has-text-white">
                            {" "}
                            Dr. Suraj Kumar Mukti
                          </div>
                        </Link>
                      </div>
                      Assistant Professor <br />
                      Dept. of ME
                      <br />
                      NIT Raipur
                      <br />
                      <Link to="tel:+919302837666"><i className="fas fa-phone fa-lg" />{"  "}+91-9302837666</Link>
                      <br />
                      <Link
                        to="mailto:skmukti.mech@nitrr.ac.in"
                      >
                        <i className="fas fa-envelope fa-lg" />
                        {"  "}skmukti.mech@nitrr.ac.in
                      </Link>
                    </div>
                  </div>
                </div>
                <br />
                <div className="columns">
                  <figure className="image">
                    <Link
                      to="http://www.nitrr.ac.in/viewdetails.php?q=mech.jagadish"
                      target="_blank"
                    >
                      <img
                        alt="Submit"
                        style={{ width: 150, height: 200 }}
                        src={require("./img/Dr_Jagadish.jpeg")}
                      />
                    </Link>
                  </figure>
                  <div className="column">
                    <div className="font subtitle is-4 has-text-left">
                      <div style={{ backgroundColor: "#7FCF6F", padding: 5 }}>
                        <Link
                          to="http://www.nitrr.ac.in/viewdetails.php?q=mech.jagadish"
                          target="_blank"
                          className="has-text-white und"
                        >
                          <div className="has-text-white"> Dr. Jagadish</div>
                        </Link>
                      </div>
                      Assistant Professor <br />
                      Dept. of ME
                      <br />
                      NIT Raipur
                      <br />
                      <Link to="tel:+918811940517"><i className="fas fa-phone fa-lg" />{"  "}+91-8811940517</Link>
                      <br />
                      <Link
                        to="mailto:jagadish.mech@nitrr.ac.in"
                        className="has-text-link"
                      > <i className="fas fa-envelope fa-lg" />
                        {"  "}
                        jagadish.mech@nitrr.ac.in
                      </Link>
                    </div>
                  </div>
                </div>
                <br />

                <div className="columns">
                  <figure className="image">
                    <Link
                      to="http://www.nitrr.ac.in/viewdetails.php?q=mech.jagadish"
                      target="_blank"
                    >
                      <img
                        alt="Submit"
                        style={{ width: 150, height: 200 }}
                        src={require("./img/Dr_jain.jpeg")}
                      />
                    </Link>
                  </figure>
                  <div className="column">
                    <div className="font subtitle is-4 has-text-left">
                      <div style={{ backgroundColor: "#7FCF6F", padding: 5 }}>
                        <Link
                          to="http://www.nitrr.ac.in/viewdetails.php?q=me.smukti"
                          target="_blank"
                          className="has-text-white und"
                        >
                          <div className="has-text-white"> Dr. Nitin Jain</div>
                        </Link>
                      </div>
                      Associate Professor <br />
                      Dept. of ME
                      <br />
                      NIT Raipur
                      <br />
                      <Link
                        to="mailto:nkjain.me@nitrr.ac.in"
                        className="has-text-link"
                      ><i className="fas fa-envelope fa-lg" />
                        {"  "}
                        nkjain.me@nitrr.ac.in
                      </Link>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Committee;
