import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import 'typeface-roboto';
import {MenuIcon, Button, IconButton} from '@material-ui/core/'
// import SvgIcon from '@material-ui/core/SvgIcon';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
              {/* <HomeIcon /> */}

                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6">
                Hackornaut
              </Typography>

              <Button color="inherit" for="radioHL" component={Link} to="/">{props.loggedIn ? "Home" : "Login"}</Button>
              <Button color="inherit" component={Link} to="/about">Privacy</Button>
              <Button color="inherit" component={Link} to="/index">Index</Button>
              <Button color="inherit" component={Link} to="/profile">{props.loggedIn ? "Profile" : ""}</Button>


            </Toolbar>
          </AppBar>
        </div>
    )
}
export default NavBar;