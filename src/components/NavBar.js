import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Button, IconButton} from '@material-ui/core/'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import 'typeface-roboto';
// import {NavLink} from 'react-router-dom'

// const active = {
//   'font-weight': 'bold'
// }

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   textDecoration: 'none',
//   color: 'white'
// }
const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const NavBar = (props) => {
  const classes = useStyles();
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
              <Button color="inherit" component={Link} to="/">{props.loggedIn ? "Home" : "Login"}</Button>
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