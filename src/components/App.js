import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";
import Filter from "./Filter"

class App extends Component {

state = {
  pigs: hogs,
  searchTerm: ""
}



  render() {
    return (
      <div className="App">
        <Nav />
        <Filter />
        <PigContainer 
          pigs={this.state.pigs}
        />
      </div>
    );
  }
}

export default App;
