import React, { Component } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section9 from "./Section9";

class Home extends Component{
    render() {
        return(
            <React.Fragment>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section9 />
            </React.Fragment>
        );
    }
}
export default Home;