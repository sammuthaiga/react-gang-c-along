import React, { Component} from "react";
import Ninja from "./Ninja";
import Trial1 from "./Trial1";
import Plumber from "./Plumber-tools";

class App extends Component {
  render() {
    return (
      <div>
        <h1>AM BEK!!!!!!</h1>
        <h3>Short Intro:</h3>
        < Ninja name="Amigo" age="30" belt="black" />
        <Trial1 />  
        <Plumber/> 
      </div>
    );
  }

}
export default App;
