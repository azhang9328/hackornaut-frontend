import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    minHeight: 310,
    opacity: 0.7,
  }, 
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundColor: '#000000',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const ProfileCard = props => {
  const {result} = props
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={result.logo_path}
        title="Logo"
      />
      <CardHeader
        title={result.domain}  
        subheader={result.breach_date}
      />
      {/* <CardContent>
        <Typography variant="body2" component="p">
          <strong>BREACH DATE: </strong>{result.breach_date}
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}>
            <ExpandMoreIcon />

          {/* <Button>Info</Button> */}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph><strong>BREACH COUNT: </strong>{result.pwn_count}</Typography>
          <Typography paragraph><strong>DETAILS: </strong>{result.description}</Typography> 
          <Typography paragraph><strong>DATA CLASSES: </strong>{(result.data_classes).replace(/[\[\]"]+/g, '')}</Typography>
          <Typography paragraph><strong>IS SPAM LIST: </strong>{result.is_spam_list ? "True" : "False"}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProfileCard