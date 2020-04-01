import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Button, IconButton} from '@material-ui/core/'
import {Link} from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import 'typeface-roboto';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > svg': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const NavBar = (props) => {

    return(
        <div>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
              <HomeIcon />
              </IconButton>
              <Typography variant="h6">
                Hackornaut
              </Typography>

              <Button color="inherit" for="radioHL" component={Link} to="/">{props.loggedIn ? "Home" : "Login"}</Button>
              <Button color="inherit" component={Link} to="/about">Privacy</Button>
              <Button color="inherit" component={Link} to="/index">Index</Button>
              {/* <NavLink to="/about" exact style={link} activeStyle={active} className={classes.root} >Testing</NavLink> */}
              <Button color="inherit" component={Link} to="/profile">{props.loggedIn ? "Profile" : ""}</Button>
            </Toolbar>
          </AppBar>
        </div>
    )
}
export default NavBar;