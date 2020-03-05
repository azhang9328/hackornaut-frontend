import React, { Component } from 'react';
import Login from './containers/Login';
import SearchContainer from './containers/SearchContainer'
import NavBar from './components/NavBar'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Privacy from './components/Privacy'
import IndexContainer from './containers/IndexContainer'

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
      <Router>
        <div className="App">
          <NavBar loggedIn={this.state.loggedIn}/>
          <Switch>
              <Route path="/about">
                <Privacy/>
              </Route>
              <Route path="/index">
                <IndexContainer/>
              </Route>
              <Route path="/">
                {this.state.loggedIn ? <SearchContainer currUser={this.state.currUser}/> : <Login logUserIn={this.logUserIn}/>}
              </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
