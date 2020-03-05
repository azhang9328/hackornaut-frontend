import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const DB_URL = "http://localhost:3000/"

class SearchContainer extends Component {

    state = {
        results: null
      }

    search = (email) => {
        fetch(DB_URL + "emails/search", {
          method: 'POST',
          headers: {'Content-Type':'application/json',
                    Accept: 'application/json'},
          body: JSON.stringify({"search": email})
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            results: data
          })
        })
      }
    
      saveSearchResult = () => {
        fetch(DB_URL + `users/${this.props.currUser.id}/save_search`, {
          method: 'POST',
          headers: {'Content-Type':'application/json',
                    Accept: 'application/json'},
          body: JSON.stringify(this.state.results)
        })
      }

      showResults = () => {
        return <div>
          <Grid container direction="column" justify="center" alignItems="center">

                {/* {this.state.results.address} */}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.saveSearchResult()
                  }}>
                    <Button variant="contained" color="primary">Save Email + Breach Results </Button>
                </form>
                <SearchList saveSearchResult={this.saveSearchResult} breaches={this.state.results.breaches}/>
          </Grid>
        </div>
      }

      render(){
        console.log(this.state.results)
          return(
            <div>
                <SearchBar  search={this.search}/>


                {this.state.results === null ? null : this.showResults()}
            </div>
          )
      }
}

export default SearchContainer