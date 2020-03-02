import React, { Component } from 'react';
import Login from './containers/Login';

import './App.css';

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
    this.setState({
      loggedIn: true,
      currUser: {name: username}
    })

    console.log(this.state)
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
