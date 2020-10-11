import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from './PigContainer'
import Search from './Search'


class App extends Component {

state = {
  pigs : hogs,
  selectChoice: "All"
}

handleSelection = (selectedInput) => {
  this.setState({
    selectChoice: selectedInput
  })
}

pigFilterArray = () => {
  let choice = this.state.selectChoice
  switch (choice){
    case "All" :
      return this.state.pigs
   
    case "Greasy" :
      return this.state.pigs.filter(pig => pig.greased)

    case "Clean" : 
      return this.state.pigs.filter(pig => !pig.greased)  

    case "Weight" : 
       let copyOfArrayW = [...this.state.pigs]  
       copyOfArrayW.sort( (pigA, pigB) => {
         return pigA.weight - pigB.weight
       })
       return copyOfArrayW

    case "Name" : 
        let copyOfArrayN = [...this.state.pigs]  
        copyOfArrayN.sort( (pigA, pigB) => {
          return pigA.name.localeCompare(pigB.name)
        })
        return copyOfArrayN
    default :
      null    
  }
 
}




  render() {
    
    return (
      <div className="App">
        <Nav />
        <Search 
          selectChoice={this.state.selectChoice}
          handleSelection={this.handleSelection}
        />
        <PigContainer pigs={this.pigFilterArray()} />

      </div>
    );
  }
}

export default App;
