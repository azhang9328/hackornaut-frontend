import React, { Component} from 'react'

class SearchBar extends Component {
    render(){
        return(
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.search(e.target.search.value)
                }}>
                <input type="text" name="search"></input>
                <button value="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar