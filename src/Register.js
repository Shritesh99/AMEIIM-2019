import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Register extends Component {
  render() {
    return (
      <section id="committee" className="section hero">
        <div className="hero-head">
          <div className="container has-text-centered">
            <Link to="#">
              <div className="button is-success is-large">
                <div className="font subtitle is-4 has-text-white">
                  Download Brochure
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="font subtitle is-4">
              Registration fee is payable by Demand Draft (DD) in favour of
              “Director, NIT Raipur” at Raipur or Online payment (Check Details
              at website also). The registration fees include conference kit,
              conference proceedings, tea and lunch. Additional charges may be
              applicable for publication book series.
              <br/><br/>
              According to ICRTECS-2019 conference registration policy, after
              obtaining the formal acceptance by e-mail, at least one author of
              each paper must complete registration formalities including
              payment of full registration fees at the rate mentioned below.
            </div>

            <figure className="image">
              <img alt="Submit" src={require("./img/fee.png")} />
            </figure>
            <br/>
            <div className="font subtitle is-5">
              Student’s authors must submit identity proof.
              <br />
              <br />
              Fee for late Registration: Reg. Fee + 1000 (for Indian
              participant), Reg. Fee+50 USD (foreign)
              <br />
              <br />
              Participants are requested to read all the information displayed
              below carefully.
              <br />
              <br />
              REGISTRATION DETAILS:
            </div>
            <div className="content">
              <ul>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Authors submitting Abstract only will be considered for Poster Presentation & Publication in Conference Proceedings after review.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Authors submitting full paper will be considered for Oral Presentation & Publication in Springer (Scopus Indexed) & Industrial Engineering Journal and / Udyog Pragati: The Journal for Practicing Managers subjected to peer review policy and terms & conditions of publisher.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Plagiarism should be strictly avoided for final publication. Plagiarized manuscripts may be rejected at any stage during conference peer review/publication schedule etc.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    No registration after 20<sup>th</sup> November 2019 shall be entertained.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Accompanying person will be offered a 10 % discount in registration fees.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    It is mandatory for at least one author to register for each
                    paper and present the paper for inclusion in the conference
                    proceedings. It is up to the discretion of the Conference
                    Committee to allow "no shows" to be published in the
                    proceedings.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Without formal acceptance of the paper, Deposition of
                    Registration Fee is not allowed.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Registration Fees will cover: Registration Kits,
                    Breakfast/Lunch/Snacks/Tea, Participation Certificates.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Registration fee excludes accommodation.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Registration fee is for a single delegate.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Registration fee is non refundable.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Registration is required for each accepted paper separately.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    If an author has more than one accepted papers, he/she has
                    to register each paper separately. If co-authors want to
                    participate, they have to register as "Accompanying Person".
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    All registered author’s name will be displayed in the
                    website.
                  </div>
                </li>
                <li>
                  <div className="font subtitle is-5 has-text-left">
                    Best papers award will be provided with certificates.
                  </div>
                </li>
              </ul>
            </div>
            <div className="font subtitle is-5 has-text-justified">
              Extended version of the selected papers will be processed for
              probable publication in selected journals. Guest Editor or Editor
              in Charge of the respective journals will have the sole discretion
              in all kind of correspondences regarding submission of the
              extended version of the papers. Authors are to follow the
              guidelines of the journals accordingly. Conference authority will
              not be responsible for any non-acceptance or any non-compliance of
              any paper.
              <br />
              <br />
              All the submitted papers are to be plagiarism checked.
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Register;
