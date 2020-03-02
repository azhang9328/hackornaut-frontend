import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

    state = {
        username: ""
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logUserIn(this.state.username)
    }
    render() {
        return(
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label><b>Login</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => this.handleChange(e)}/>
                    <button type="submit">Login or Create</button>
                </form>
            </div>

        )
    }
}

export default Login