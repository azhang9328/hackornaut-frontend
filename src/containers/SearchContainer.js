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

      showResults = () => {
        return <div>
                {this.state.results.address}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.saveSearchResult()
                  }}>
                    <button>Save Email + Breach Result</button>
                </form>
                <BreachList saveSearchResult={this.saveSearchResult} breaches={this.state.results.breaches}/>
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