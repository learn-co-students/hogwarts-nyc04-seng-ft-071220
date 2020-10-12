import React from 'react'
import Pig from './Pig'

class PigContainer extends React.Component {

    render() {
        
        let pigarray = this.props.pigs.map(pigObj => {
            return <Pig key={pigObj.name} pig={pigObj} />
        }) 

        return(
            <ul className="grid container">
                {pigarray}
            </ul>
        )
    }
}

export default PigContainer