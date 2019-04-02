import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <div className="navbar-item title">
                                    <div className="subHeading">
                                        AMEIIM-2019
                                    </div>
                                </div>
                            </div>
                            <div id="navbarMenuHeroA" className="navbar-menu">
                                <div className="navbar-end">
                                    <a className="navbar-item">
                                        <div className="font subtitle is-4">
                                            Dates
                                        </div>
                                    </a>
                                    <a className="navbar-item">
                                        <div className="font subtitle is-4">
                                            Submission Procedure
                                        </div>
                                    </a>
                                    <a className="navbar-item">
                                        <div className="font subtitle is-4">
                                            Pricing
                                        </div>
                                    </a>
                                    <a className="navbar-item">
                                        <div className="font subtitle is-4">
                                            About Us
                                        </div>
                                    </a>
                                    <div className="navbar-item">
                                        <a href="/">
                    <span className="button is-success is-medium">
                      <div className="font subtitle is-4 has-text-white">
                       Register
                    </div>
                    </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>


                <div className="hero-body">
                    <div className="container has-text-centered ">
                        <div className="title is-2 heading">
                            1st International Conference
                        </div>
                        <div className="subtitle is-3">
                            <div className="subHeading">
                                On
                            </div>
                        </div>

                        <div className="title is-2 heading">
                            Advances in Mechanical Engineering, Industrial Informatics and Management
                        </div>

                        <div className="subtitle is-3 subHeading">
                            13th-14th December 2019
                        </div>
                        <div className="button is-success is-large">
                            <div className="font subtitle is-3 has-text-white">
                                Register
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section1;