import React, { Component } from 'react';
import Login from './containers/Login';

import './App.css';

const DB_URL = "http://localhost:3000/"
class App extends Component {

  state = {
    loggedIn: false,
    currUser: {
                id: "",
                name: "",
              },
  }

  logUserIn = (username) => {
    console.log(username)
    console.log(DB_URL + "users/login")

    // this.setState({
    //   loggedIn: true,
    //   currUser: {name: username}
    // })
    console.log(this.state)
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
        <p>Hackernaut Frontend</p>
        {this.state.loggedIn? <p>logged in</p> : <Login logUserIn={this.logUserIn}/>}
      </div>

     
    );
  }
}

export default App;
