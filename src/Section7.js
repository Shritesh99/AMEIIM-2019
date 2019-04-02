import React, { Component } from 'react';

class Section7 extends Component{
    render() {
        return(
            <section className="section">
                <div className="container level">
                        <div className="level-item">
                            <div className="has-text-centered">
                                    <div className="title is-3 heading">
                                        Organized By
                                    </div>
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/logo1.jpeg')} style={{ height: 237, width:212,marginTop:20 }}/>
                                    <div className="font subtitle is-4 has-text-centered has-text-black" style={{padding: 20}}>
                                        NATIONAL INSTITUTE OF TECHNOLOGY RAIPUR
                                    </div>
                                </figure>
                            </div>
                        </div>
                </div>
                <div className="title is-3 heading has-text-centered">
                    Sponsored By
                </div>
                <div className="container level">
                            <div className="level-item has-text-centered">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/logo2.jpeg')} style={{ height: 225, width:225,marginTop:10 }}/>
                                    <div className="font subtitle is-4 has-text-black" style={{padding: 20}}>
                                        CHATTISGARH COUNCIL OF SCIENCE AND TECHNOLOGY
                                    </div>
                                </figure>
                            </div>
                            <div className="level-item has-text-centered">
                                <figure className="image">
                                    <img alt="Submit" src={require('./img/logo3.jpeg')} style={{ height: 235, width:225,marginTop:10 }}/>
                                    <div className="font subtitle is-4 has-text-black" style={{padding: 20}}>
                                        THE INSTITUTION OF ENGINEEERS (INDIA)
                                    </div>
                                </figure>
                            </div>
                </div>
            </section>
        );
    }
}
export default Section7;