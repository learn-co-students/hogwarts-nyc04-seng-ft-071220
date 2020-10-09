import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Search from "./Search"
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";

class App extends Component {

state = {
  pigs: hogs,
  selectedCategory: "All"
}


changeSelectedCategory = (chosenCat) => {
  this.setState({
    selectedCategory: chosenCat
  })
}

helperFunctionThatReturnsAnArray = () => {
  if(this.state.selectedCategory === "All"){
    return this.state.pigs

  } else if(this.state.selectedCategory === "Greasy"){
    return this.state.pigs.filter(pig => pig.greased)

  } else if(this.state.selectedCategory === "Clean"){
    return this.state.pigs.filter(pig => !pig.greased)

  } else if(this.state.selectedCategory === "Name"){
    let copyOfArray = [...this.state.pigs]
    copyOfArray.sort((pigA, pigB) => {
      return pigA.name.localeCompare(pigB.name)
    })
    return copyOfArray
    
  } else if(this.state.selectedCategory === "Weight"){
    let copyOfArray = [...this.state.pigs]
    copyOfArray.sort((pigA, pigB) => {
      return pigA.weight - pigB.weight
    })
    return copyOfArray
  }

}



  render() {
    return (
      <div className="App">
        <Nav />
        <Search 
        selectedCategory={this.state.selectedCategory}
        changeSelectedCategory={this.changeSelectedCategory}
        />
        <PigContainer pigs={this.helperFunctionThatReturnsAnArray()}/>
      </div>
    );
  }
}

export default App;
