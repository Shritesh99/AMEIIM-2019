import React, { Component } from 'react';

class Section5 extends Component {
    render() {
        return (
            <section id="papers" className="hero is-fullheight">
                <div className="hero-head">
                    <div className="container has-text-centered">
                        <div className="title is-2 heading level-item">
                            <div className="has-text-centered">
                                Call for Papers
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/paper.svg')}/>
                                </figure>
                            </div>
                            <div className="column">
                                <div className="Heading title is-5 has-text-left">
                                    Students, Faculties, Research Scholars, Scientist and Industrial
                                    Executives are welcome to submit the one-page abstract of their
                                    research on any of the following themes although not limited to
                                    following areas:
                                </div>
                                <div className="content">
                                    <ul>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Advance in Thermal Engineering
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Mechanical System Design
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Vibration and Control
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Advanced Manufacturing Technologies
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Green Manufacturing / Lean Manufacturing
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Additive Manufacturing /Reverse Engineering / Re-Engineering
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Advancements in Material and Metallurgical Processes
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            CAD/CAM/CIM
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Robotics and Automation
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Modeling, Analysis and Simulation of Mechanical System
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Optimization Techniques
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Internet of Things (IoT)
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Industry 4.0
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Soft Computing and Artificial Intelligence
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Enterprise Resource Planning
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Management Information System
                                        </div>
                                    </li>
                                    <li>
                                        <div className="font subtitle is-5 has-text-left">
                                            Industrial Engineering and Management
                                        </div>
                                    </li>
                                </ul></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section5;