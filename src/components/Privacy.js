import React, {Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Octocat from '../images/GitHub.png';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
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
    width: 75,
    height: 75,
  },
  img: {
    margin: 'auto',
    display: 'inline-block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Privacy = () => {
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography variant="h4" line-height="1.6">Mission Statement</Typography><hr></hr>
                        <p>
                        Here at Hackornaut, our mission is to help inform and secure our user's privacy.  This website is designed with that goal in mind.
                        </p><br></br>
                        <Typography variant="h4">Key Features</Typography><hr></hr>
                        <p>
                        Users can view an index of all breached sites.  Users can search their email to view all breaches associated with that particular email account.  Users can create an account to save their searches.                 
                        </p><br></br>
                        <Typography variant="h4">5 Ways to Keep Your Emails Secure</Typography><hr></hr>
                        <p>
                          <Typography variant="h6">1.	Use two-factor authentication</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          The basic principle of two-factor authentication is simple: combine something you know with something you have. One example is a debit card, which requires you to have both your physical card and your PIN to verify your identity. By enabling two-factor authentication (or two-step verification), you aren’t putting all of your faith in a password. 
                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">2.	Limit Forwarding</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          When we’re sent a message we want to share, we often click “Forward” without thinking about the consequences. Where is the message going? Who will see it? Where will it be stored? If your email is hosted on a corporate server, it is likely there are certain security measures in place to protect any sensitive information contained in your private email. When someone forwards an internal email to a recipient outside of your company, however, you are exposing that data to potentially unsecured, unencrypted servers.
                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">3.	Set expiration dates on your messages</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          Inboxes are rarely cleaned up, that means that any sensitive information you send to a client could very well be sitting there months later. At that point, you no longer control the fate of your data. Set an expiration date on your email, so that after a certain date, it will no longer be readable by the recipient (or anyone else, for that matter).
                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">4.	Understand your service provider’s TOS</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          Your email provider’s terms of service will tell you what kind of security they are offering you. Are they encrypting messages on their server? Do they have protections against brute-force attacks? Is there any guarantee that your data is being protected?  You’ll likely realize that keeping your private email secure is entirely up to you.
                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">5.	Encrypt your email</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          The best way to keep your private email away from prying eyes and hackers is to use encryption. Encryption protects your private email by jumbling up your messages, making them impossible to decipher unless you explicitly authorize someone to read them.
                          </Box>
                        </p><br></br>
                        <Typography variant="h4">Creators</Typography><hr></hr>
                    </Grid>
                  </Grid>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={Octocat}/>
                      </ButtonBase>                    
                    </Grid>
                    <Grid item xs>
                      <Typography><strong>Alicia Chao: </strong><a href="https://github.com/chaochaocodes">@chaochaocodes</a></Typography>
                      <Typography><strong>Allen Zhang: </strong><a href="https://github.com/azhang9328">@azhang9328</a></Typography>
                      <Typography><strong>Eric Stukenberg: </strong><a href="https://github.com/EricStukenberg">@EricStukenberg</a></Typography>
                    </Grid>
                  </Grid>
                </Paper>
            </div>
        </Fragment>
    )
}

export default Privacy