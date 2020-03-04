import React, { Component } from 'react';
import Login from './containers/Login';
import MainContainer from './containers/MainContainer'
import NavBar from './components/NavBar'
import Privacy from './components/Privacy'

import './App.css';

const DB_URL = "http://localhost:3000/"
class App extends Component {

  state = {
    loggedIn: false,
    currUser: {
                id: "",
                name: "",
              }
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

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.loggedIn ? <MainContainer currUser={this.state.currUser}/> : <Login logUserIn={this.logUserIn}/>}
        <Privacy />
      </div>
    );
  }
}

export default App;
