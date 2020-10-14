import React from 'react'

class Search extends React.Component {
    render() {
        return(
            <select>
                <option value={"All"}>All Piggies</option>
                <option value={"Greasy"}>Greasy Pigs</option>
                <option value={"Clean"}>Clean Pigs</option>
                <option value={"Weight"}>Sort by Weight</option>
                <option value={"Name"}>Sort by Name</option>
            </select>
        )
    }
}

export default Search