import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const BreachCard = props => {
  const {result} = props
  const classes = useStyles();

    return(
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={result.logo_path}/>
                      </ButtonBase>                    
                    </Grid>
                    <Grid item xs>
                      <Typography><strong>DOMAIN: </strong>{result.domain}</Typography> 
                      <Typography><strong>BREACH DATE: </strong>{result.breach_date}</Typography>
                      <Typography><strong>BREACH COUNT: </strong>{result.pwn_count}</Typography>
                      <Typography><strong>DETAILS: </strong>{result.description}</Typography> 
                      <Typography><strong>DATA CLASSES: </strong>{(result.data_classes).replace(/[[\]"]+/g, '')}</Typography>
                      <Typography><strong>IS SPAM LIST: </strong>{result.is_spam_list ? "True" : "False"}</Typography>
                    </Grid>
                  </Grid>
                </Paper>
            </div>
        </Fragment>
     )
 }

export default BreachCard