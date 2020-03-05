import React, { Component} from 'react'
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
    render(){
        return(
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.search(e.target.search.value)
                }}>
                <TextField name="search" style={{padding: 24}}
                    id="searchInput"
                    placeholder="Search for E-mail" 
                    margin="normal"
                    color="text.secondary"
                    />
                <button value="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar