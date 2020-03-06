import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const DB_URL = "http://localhost:3000/"

class SearchContainer extends Component {

    state = {
        results: null,
        select_amount: 10,
        start_index: 0
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


    showMoreBreaches = () => {
        let add = parseInt(this.state.select_amount)
        let start = parseInt(this.state.start_index)
        const new_start = add + start
        this.setState({
          start_index: new_start
        })
        console.log(this.state)
    }

    showLessBreaches = () => {
      let minus = parseInt(this.state.select_amount)
      let start = parseInt(this.state.start_index)
      const new_start = start - minus
      if(new_start >= 0) {
          this.setState({
          start_index: new_start
          })
      }
      console.log(this.state)

  }

  getSelectBreaches = () => {
    console.log("Get Selected Breaches", this.state.results.breaches.slice(this.state.start_index, this.state.start_index+this.state.select_amount))
    return this.state.results.breaches.slice(this.state.start_index, this.state.start_index+this.state.select_amount);
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
                {/* <SearchList saveSearchResult={this.saveSearchResult} breaches={this.state.results.breaches}/> */}

                <SearchList saveSearchResult={this.saveSearchResult} breaches={this.getSelectBreaches()}/>
                </Grid>
                <button onClick={() => this.showLessBreaches()}> ←</button>
                 {this.state.start_index}-{parseInt(this.state.start_index+this.state.select_amount)}   
                <button onClick={() => this.showMoreBreaches()}> →</button>
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