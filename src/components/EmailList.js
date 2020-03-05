import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import EmailIcon from "@material-ui/icons/Email";
import { Container } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    position: "center",
    backgroundColor: 'transparent',
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const EmailList = props => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(props)

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            </ListSubheader>
        }
        className={classes.root}
        >
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
            <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={props.address} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
                <ListItemText primary="Starred" />
            </ListItem>
            </List>
        </Collapse>
        </List>
    </Container>
  );
}
export default EmailList