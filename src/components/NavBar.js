import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import 'typeface-roboto';
import {MenuIcon, Button, IconButton} from '@material-ui/core/'
// import SvgIcon from '@material-ui/core/SvgIcon';


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <HomeIcon /> */}

              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6">
              Hackornaut
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;