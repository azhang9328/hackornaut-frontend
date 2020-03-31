import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import "./Login.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    // padding: theme.spacing(0, 3),
    },
  paper: {
    maxWidth: 800,
    overflow: 'hidden',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4), 
    backgroundColor: '#000000',
    color: '#FFFFFF',
    opacity: 0.7,
  },
}));


class Login extends Component {

    state = {
        username: "",
        styles: useStyles
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
            <Grid container justify="center" >
                <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label><h2>LOGIN</h2></label>
                    <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => this.handleChange(e)}/>
                    <button type="submit">Login</button>
                </form>
                </div>
            </Grid>
        )
    }
}

export default Login