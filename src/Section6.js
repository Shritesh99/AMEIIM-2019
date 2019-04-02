import React, { Component } from "react";

class Section6 extends Component {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <div className="container has-text-centered">
                        <div className="title is-2 heading level-item">
                            <div className="has-text-centered">
                                About Us
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <div className="font subtitle is-3 has-text-black">
                                    AMEIIM-2019
                                </div>
                                <div className="font subtitle is-4 has-text-centered">
                                    On stepping into its successful 60th year, Department of Mechanical
                                    Engineering, NIT Raipur is organizing its 1st International
                                    Conference on Advances in Mechanical Engineering, Industrial
                                    Informatics and Management (AMEIIM-2019) on 13th-14th
                                    December, 2019 for deliberating with distinguished experts in this
                                    field. This invitation is open for all academicians, research scholars,
                                    post-docs, PG and UG students functioning in the relevant areas. It
                                    also provides a premier interdisciplinary platform for researchers,
                                    practitioners and educators to present and discuss the most recent
                                    innovations, trends, and concerns as well as practical challenges
                                    encountered and solutions adopted in relevant areas.
                                </div>
                            </div>
                            <div className="column has-text-right">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/logo4.jpeg')}/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/nit.jpeg')}/>
                                </figure>
                            </div>
                            <div className="column">
                                <div className="font subtitle is-3 has-text-black">
                                    NIT RIAIPUR
                                </div>
                                <div className="font subtitle is-4 has-text-centered">
                                    National Institute of Technology Raipur situated in the capital of
                                    a newly incepted state of Chhattisgarh, has proven to be "Avantgrade' in the field of science and technology over past few
                                    decades in this region. With sweet memory of foundation
                                    ceremony by our Hon'ble President Dr. Rajendra Prasad on 14th
                                    September 1956, the institute started with two departments
                                    namely Metallurgical and Mining Engineering. Later the
                                    inauguration of the Institute building was done by our Hon'ble
                                    Prime Minister Pt. Jawahar Lal Nehru on 14th March 1963. From
                                    1st December 2005, the institute has become the National Institute
                                    of Technology. Presently, the institute offers 12 undergraduate
                                    and 6 postgraduate courses & almost Ph.D in all disciplines.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <div className="font subtitle is-3 has-text-black">
                                   MECHANICAL ENGINEERING DEPARTMENT
                                </div>
                                <div className="font subtitle is-4 has-text-centered">
                                    The Mechanical department started in the year 1958 and
                                    department offers undergraduate program (B.Tech.) in
                                    Mechanical Engineering and Postgraduate program (M.Tech.) in
                                    Thermal, Design, Industrial Engineering and Management. It is
                                    one of the largest departments of the institute with intake of 90
                                    students for undergraduate course and 43 students for post
                                    graduate course. Department also offers Ph.D. program in all
                                    relevant discipline of Mechanical Engineering including Thermal,
                                    Design, Production, and Industrial Engineering and Management.
                                </div>
                            </div>
                            <div className="column has-text-right">
                                <figure className="image" style={{padding:100}}>
                                    <img alt="Submit" src={require('./img/logo1.jpeg')}/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column has-text-right">
                            <figure className="image">
                                <img alt="Submit" src={require('./img/raipur.jpg')}/>
                            </figure>
                        </div>
                        <div className="column">
                            <div className="font subtitle is-3 has-text-black">
                                RAIPUR
                            </div>
                            <div className="font subtitle is-4 has-text-centered">
                                Raipur, capital of Chhattisgarh is a historical city of India.
                                Energy Park, Gandhi Udyan, Purkhouti Muktangan, Burha
                                Sarowar, Guru Ghasidas Museum, Nandanwan Zoo, Mahamaya
                                Temple etc. are some of the interesting places to visit in Raipur.
                                Raipur is a fast-developing city and emerging as education hub of
                                India. Many institutions like National Law University, AIIMS,
                                IIM, Engineering and Medical College have been established
                                here. Since, Chhattisgarh is rich in mineral, agriculture and
                                forest, many public sector, private sector and multinational
                                companies are situated around Raipur.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section6;