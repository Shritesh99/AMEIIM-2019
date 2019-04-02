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
                                        About Raipur
                                    </div>
                                <div className="font subtitle is-4 has-text-left">
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
                            <div className="column">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/raipur.jpeg')}/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section6;