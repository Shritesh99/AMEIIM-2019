import React, { Component } from "react";

class Footer extends Component{
    render() {
        return(
            <footer className="footer">
                <div className="content">
                    <div className="columns">
                        <div className="column">
                            <div className="title is-3 heading has-text-centered">
                                AMEIIM-2019
                            </div>
                        </div>
                        <div className="column">
                            <div className="subtitle is-3 subheading has-text-centered">
                                Contact Us
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="subtitle is-5 subheading has-text-left">
                                        <b>Dr. Jagadish</b>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="subtitle is-5 subheading has-text-left">
                                        +91-8811940517
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="subtitle is-5 subheading has-text-left">
                                        <b>Dr. Suraj Kumar Mukti</b>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="subtitle is-5 subheading has-text-left">
                                        +91-9302837666
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="subtitle is-3 subheading">
                                Address
                            </div>
                            <address>
                                Organizing Secretary,<br/>
                                <b>AMEIIM-2019</b>,<br/>
                                Department of Mechanical Engineering,<br/>
                                National Institute of Technology Raipur,<br/>
                                G.E. Road, Raipur (CG)-492010<br/>
                                Email: <a href="mailto:ameiim2019@gmail.com">ameiim2019@gmail.com</a>
                            </address>
                        </div>
                    </div>
                    <div className="subtitle is-6 heading has-text-centered">
                        © 2019 | AMEIIM-2019. All Rights Reserved
                    </div>
                    <div className="subtitle is-6 heading has-text-centered">
                        Developed and Maintained By <a href="http://shri99.me/" target="_blank">Shritesh (NIT Raipur)</a>.
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;