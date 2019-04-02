import React, { Component } from 'react';

class Section3 extends Component {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <div className="container has-text-centered">
                        <div className="title is-2 heading level-item">
                            <div className="has-text-centered">
                                Submission Procedure
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <div className="font subtitle is-4 has-text-centered">
                                    Abstract and full length paper need to be submitted through the
                                    EasyChair web-portal using the following <a href="https://easychair.org/conferences/?conf=ameiim2019">link</a> or Authors can
                                    also submit the abstracts using email with the following <a href="mailto:ameiim2019@gmail.com">email-address</a>. Full contact information (name, affiliation,
                                    email ID and and Tel/Fax number) of the corresponding author should be
                                    provided in the email.
                                </div>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/submit.svg')}/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section3;