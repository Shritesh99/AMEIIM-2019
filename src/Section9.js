import React, { Component } from 'react';

class Section9 extends Component {
    render() {
        return (
            <section id="register" className="section">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <div className="font subtitle is-3 has-text-black">
                                    IMPORTANT THINGS TO NOTE
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
                                                Authors submitting full paper will be considered for Oral Presentation & Publication in AIP proceedings indexed in Web of Science and Scopus subjected to peer review policy and terms & conditions of publisher.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="font subtitle is-5 has-text-left">
                                                Plagiarism should be strictly avoided for final publication. Plagiarized manuscripts may be rejected at any stage during conference peer review/publication schedule etc.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="font subtitle is-5 has-text-left">
                                                No registration after 20th November 2019 shall be entertained.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="font subtitle is-5 has-text-left">
                                                Accompanying person will be offered a 10 % discount in registration fees.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/note.svg')}/>
                                </figure>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}
export default Section9;