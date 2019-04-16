import React, { Component } from "react";

class Conference extends Component {
  render() {
    return (
      <section id="committee" className="section hero">
        <div className="hero-head">
          <div className="container has-text-centered">
            <div className="title is-2 heading">
              Distinguished Keynote Speakers
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <div className="has-text-centered">
                      <a
                        href="https://scholar.google.co.in/citations?user=mgj0B34AAAAJ&hl=en"
                        target="_blank"
                      >
                        <img
                          style={{ width: 150, height: 200, marginTop: 25 }}
                          alt="Submit"
                          src={require("./img/Kapil Gupta.jpeg")}
                          className="has-text-centered"
                        />
                        <div
                          className="font subtitle is-4 has-text-black"
                          style={{ marginTop: 10 }}
                        >
                          Dr. Kapil Gupta
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="font subtitle is-6 has-text-centered">
                      Dr. Kapil Gupta is working as Associate Professor in the
                      Dept. of Mechanical and Industrial Engineering Technology
                      at the University of Johannesburg. Advanced machining
                      processes, sustainable manufacturing, green machining,
                      precision engineering and gear technology are the areas of
                      his interest. He has authored several SCI/ISI Journal and
                      International Conference articles. He also authored and
                      edited more than ten books on hybrid machining, advanced
                      gear manufacturing, micro and precision manufacturing, and
                      sustainable manufacturing etc. with the renowned
                      international publishers. He has edited two special issues
                      for Scopus-indexed journals int. j. of machining and
                      machinability of material and int. j. of materials
                      engineering and innovations. Kapil Gupta has been a part
                      of several international conferences and symposiums as an
                      invited speaker and technical/organizing committee member.
                      He is working on various funded research projects in
                      advanced manufacturing in collaboration with international
                      universities and institutions. He is extensively busy in
                      PG supervision of many international students. Kapil Gupta
                      is also actively involved in various teaching and learning
                      projects.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="font subtitle is-3 has-text-black has-text-centered">
                  Industry 4.0 based Manufacturing Engineering Research and
                  Education
                </div>
                <div className="font subtitle is-4 has-text-centered">
                  A technology driven society of 21 st century demands skilled
                  technocrats and engineers. To fulfil this demand, a
                  revolutionary transformation is needed within higher
                  education. In-fact that transformation has been started with
                  intervention of information and communication technologies.
                  With time, the traditional classroom teaching is being
                  replaced by ultra-modern techniques, textbooks by e-books and
                  online database, student backpacks by smart electronic
                  devices, and physical labs by virtual labs. E-learning has
                  been introduced for convenient quicker learning and better
                  understanding. Globally, the manufacturing sector is busy
                  implementing the 4th industrial revolution i.e. Industry 4.0
                  concept. It is a current trend of automation and data exchange
                  in manufacturing technologies and majorly includes cyber-
                  physical systems, the internet of things, cloud computing and
                  cognitive computing. To overcome the challenges and success of
                  industry 4.0 transformation, it is necessary to provide the
                  knowledge of the required technologies at higher education
                  level where future manufacturing/industrial/mechanical
                  engineers are built. E-learning via virtual labs,
                  gamification, project based learning, Flipped classroom
                  teaching, and smart classroom concepts are some of the
                  techniques used to promote Industry 4.0 interventions in
                  manufacturing engineering education. Moreover, for
                  research-development &amp; innovation, there are various
                  Industry 4.0 tools and techniques (such as neural network,
                  soft computing, and life cycle analysis etc.) being attempted
                  in manufacturing sector to optimise manufacturing processes
                  for enhanced productivity, quality and sustainability. This
                  talk will focus on the aforementioned Industry 4.0
                  interventions in manufacturing engineering research and
                  education with the help of some case studies.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-head">
          <div className="container has-text-centered">
            <div className="title is-2 heading">How to reach NIT Raipur</div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
                <div className="column is-one-third" >
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
                        style={{width: 1000, height: 350}} frameBorder="0"  allowFullScreen></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Conference;
