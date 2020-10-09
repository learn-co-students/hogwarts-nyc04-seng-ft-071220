import React from 'react'

import pigImage1 from '../hog-imgs/augustus_gloop.jpg'
import pigImage2 from '../hog-imgs/bay_of_pigs.jpg'
import pigImage3 from '../hog-imgs/cherub.jpg'
import pigImage4 from '../hog-imgs/galaxy_note.jpg'
import pigImage5 from '../hog-imgs/leggo_my_eggo.jpg'
import pigImage6 from '../hog-imgs/mudblood.jpg'
import pigImage7 from '../hog-imgs/piggy_smalls.jpg'
import pigImage8 from '../hog-imgs/porkchop.jpg'
import pigImage9 from '../hog-imgs/rainbowdash.jpg'
import pigImage10 from '../hog-imgs/sobriety.jpg'
import pigImage11 from '../hog-imgs/the_prosciutto_concern.jpg'
import pigImage12 from '../hog-imgs/trouble.jpg'
import pigImage13 from '../hog-imgs/truffleshuffle.jpg'

const pigImage = {

  'Mudblood': pigImage6,
  'Porkchop': pigImage8,
  'Cherub': pigImage3,
  'Piggy smalls': pigImage7,
  'Trouble': pigImage12,
  'Sobriety': pigImage10,
  'Rainbowdash': pigImage9,
  'TruffleShuffle': pigImage13,
  'Bay of Pigs': pigImage2,
  'The Prosciutto Concern': pigImage11,
  'Galaxy Note': pigImage4,
  'Leggo My Eggo': pigImage5,
  'Augustus Gloop': pigImage1
}

class Pig extends React.Component {

  state = {
    description: false
  }

  handleClick = () => {
    this.setState({
      description: !this.state.description
    })
  }

  render(){

      let {name, specialty, greased, weight} = this.props.pig


    return(
      <div className="ui eight wide column">
        <div className="pigTile"> 
          <img 
              src={pigImage[name]}
              alt='piggy'
              onClick={this.handleClick}
          />
          <h3 className="name">{name}</h3>
          { this.state.description ? 
              <div> 
                  <p><span> Specialty: "{specialty}" </span></p>
                  <p><span> Weight: {weight}lbs </span></p>
              </div>
          : 
          
          null }
        </div>
      </div>
    )

  }
}


export default Pig;