import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigPen from "./PigPen";
import Search from "./Search";

import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";

class App extends Component {

  state = {
    piggies: hogs
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Search />
        <PigPen piggies={this.state.piggies}/>
      </div>
    );
  }
}

export default App;
