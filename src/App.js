import React, { Component} from "react";
import Ninja from "./Ninja";
import Plumbers from "./Plumbers";
import AddNinja from "./AddNinja";

class App extends Component {
  state ={
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
    console.log(ninja);
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    });
  }

  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div>
        <h1>AM BEK!!!!!!</h1>
        <h3>Short Intro:</h3>
        < Ninja deleteNinja={this.deleteNinja} ninjas = {this.state.ninjas} />
        < AddNinja addNinja={this.addNinja} />
        < Plumbers />
      </div>
    );
  }

}
export default App;
