import React, { Component } from 'react';
import "./App.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section5/>
          <Section4/>
          <Section6/>
        </React.Fragment>
    );
  }
}

export default App;
