import React, { Component} from 'react'
import TextField from '@material-ui/core/TextField';
import "./SearchBar.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class SearchBar extends Component {
    render(){
        return(
            <Grid container direction="row" justify="center" alignItems="center">
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.search(e.target.search.value)
                }}>
                <TextField floatingLabelStyle={{color: '#000000' }}
                    name="search" 
                    id="filled-secondary"
                    label="Search for E-mail"
                    margin="normal"
                    variant="filled"
                    color="default"
                    />
                    <Button value="submit" variant="outlined" color="primary">
                        Search
                    </Button>
                {/* <button class="btn btn-default" type="button" value="submit" variant="outlined" color="primary">Search</button> */}
            </form>
            </Grid>
        )
    }
}

export default SearchBar