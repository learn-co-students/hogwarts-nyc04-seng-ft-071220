import React from 'react'


class Pig extends React.Component {

    state = {
        showdetail : false
    }

    onPigClick = (evt) => {
        this.setState({
            showdetail : !this.state.showdetail  
        })
    }


    render(){
        
        let {name, specialty, greased, weight} = this.props.pig

        let imageName = name.toLowerCase().replace(/ /g,"_")
        let pigImage = require(`../hog-imgs/${imageName}.jpg`)
       
        return(
            <li>
               <img src={pigImage} onClick={this.onPigClick} alt={name}/>
               <p> Name: {name} </p>

                {this.state.showdetail ? 
                    <div>
                        <p> specialty: {specialty} </p>
                        <p> {greased ? "GREASED" : "CLEAN"} </p>
                        <p> weight: {weight} </p>
                        <p> {this.props.pig['highest medal achieved']}</p>
                    </div>
                : 
                null 
                 }

            </li>
        )
    }
}

export default Pig