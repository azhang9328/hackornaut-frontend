import React from 'react'
import ProfileCard from './ProfileCard'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    control: {
      padding: theme.spacing(2)
    },
}));

const ProfileList = props => {
  const classes = useStyles();

  function renderResults(){
    return props.breaches.map(result => {
      return(
        <Grid key={result.id} item>
            <ProfileCard key={result.id} result={result}/>
        </Grid>
      )
    })}

    return(
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                {renderResults()}
            </Grid>
          </Grid>
        </Grid>
    )
}

export default ProfileList