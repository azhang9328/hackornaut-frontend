import React, { Component } from 'react';
import Login from './containers/Login';
import ResultList from './containers/ResultList'
import SearchBar from './components/SearchBar'

import './App.css';

const DB_URL = "http://localhost:3000/"
class App extends Component {

  state = {
    loggedIn: false,
    currUser: {
                id: "",
                name: "",
              },
    results: null
  }

  logUserIn = (username) => {
   fetch(DB_URL + "users/login", {
     method: 'post', 
     headers: {'Content-Type':'application/json',
                Accept: 'application/json'
     },
     body: JSON.stringify({
       "name": username
     })
     }).then((res) => res.json()).then((data)=> {
        this.setState({
            loggedIn: true,
            currUser: {
              id: data.id,
              name: data.name
            }
          })

     });

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
        ...this.state,
        results: data
      })
    })
  }

  saveSearchResult = () => {
    fetch(DB_URL + `users/${this.state.currUser.id}/save_search`, {
      method: 'POST',
      headers: {'Content-Type':'application/json',
                Accept: 'application/json'},
      body: JSON.stringify(this.state.results)
    })
  }

  render() {
    return (
      <div className="App">
        <p>Hackernaut Frontend</p>
        {this.state.loggedIn? <SearchBar search={this.search}/> : <Login logUserIn={this.logUserIn}/>}
        {this.state.results ? <ResultList results={this.state.results} saveSearchResult={this.saveSearchResult}/> : null}
      </div>

     
    );
  }
}

export default App;
