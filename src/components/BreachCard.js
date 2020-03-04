
import React, {Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    },
  paper: {
    maxWidth: 800,
    overflow: 'hidden',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const BreachCard = props => {
  const classes = useStyles();
  const {result} = props
    return(
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>{result.logo_path}</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>{result.description}</Typography>
                        {/* {result.title}
                        {result.domain}
                        {result.breach_date}
                        {result.pwn_count}
                        {result.description}
                        {result.data_classes}
                        {result.is_spam_list}
                        {result.logo_path} */}
                    </Grid>
                  </Grid>
                </Paper>
            </div>
        </Fragment>
     )
 }

export default BreachCard


//   {/* {result.name} */}
//   {result.title}
//   {result.domain}
//   {result.breach_date}
//   {result.pwn_count}
//   {result.description}
//   {result.data_classes}
//   {result.is_spam_list}
//   {result.logo_path}