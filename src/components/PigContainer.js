import React from "react";
import Pig from './Pig'


function PigContainer(props) {


  let arrayOfPigs = props.pigs.map((pig)=>{
        return <Pig
                  key={pig.name}
                  pig={pig}
                />

  })

    return (
      <ul className="ui grid container">
         { arrayOfPigs }
      </ul>
    );
}

export default PigContainer;
