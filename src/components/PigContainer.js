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
      <div className="ui grid container">
         { arrayOfPigs }
      </div>
    );
}

export default PigContainer;
