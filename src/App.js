import React, { Component } from 'react';
import "./App.css";
import Loader from 'react-loader-spinner'
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";

class App extends Component {
    constructor(){
        super();
        this.state = {loaded: true};
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 3500);
    }
    componentWillUnmount(){
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    render() {
    if(!this.state.loading)
        return (
        <React.Fragment>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section5/>
            <Section4/>
            <Section6/>
            <Section7/>
            <Section9/>
            <Section8/>
        </React.Fragment>
    );
    else return(
        <div className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                        <Loader
                            type="Puff"
                            color="#7FCF6F"
                            height="100"
                            width="100"
                        />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
