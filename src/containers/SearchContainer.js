import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import BreachList from '../components/BreachList'

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

      render(){
          return(
            <div>
                <SearchBar  search={this.search}/>
                {this.state.results === null ? null : <BreachList saveSearchResult={this.saveSearchResult} results={this.state.results}/>}
            </div>
          )
      }
}

export default SearchContainer