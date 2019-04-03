import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
            <section id="home" className="hero is-fullheight">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a href="#home">
                                <div className="navbar-item title">
                                    <div className="subHeading">
                                        AMEIIM-2019
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div id="navbarMenuHeroA" className="navbar-menu">
                                <div className="navbar-end">
                                    <a href="#dates" className="navbar-item">
                                        <div className="font subtitle is-4">
                                            Dates
                                        </div>
                                    </a>
                                    <a href="#papers" className="navbar-item">
                                        <div className="font subtitle is-4">
                                            Call For Papers
                                        </div>
                                    </a>
                                    <a href="#fees" className="navbar-item">
                                        <div className="font subtitle is-4">
                                            Fees
                                        </div>
                                    </a>
                                    <a href="#aboutus" className="navbar-item">
                                        <div className="font subtitle is-4">
                                            About Us
                                        </div>
                                    </a>
                                    <div className="navbar-item">
                                        <a href="#register">
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
                        <div className="columns is-vcentered">
                            <div className="column">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/landing.svg')}/>
                                </figure>
                            </div>
                            <div className="column">
                        <div className="title is-3 heading">
                            1st International Conference
                        </div>
                        <div className="subtitle is-4">
                            <div className="subHeading">
                                On
                            </div>
                        </div>

                        <div className="title is-4 has-text-black heading">
                            Advances in Mechanical Engineering Industrial Informatics and Management
                        </div>

                        <div className="subtitle is-4 subHeading">
                            13th-14th December 2019
                        </div>
                        <a href="#register">
                        <div className="button is-success is-large">
                            <div className="font subtitle is-4 has-text-white">
                                Register
                            </div>
                        </div>
                        </a>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section1;