import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import WebIcon from "@material-ui/icons/Web";
import { makeStyles } from "@material-ui/core/styles";
import BugBearsPic from "../Assets/project-images/BugBears.png";

const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
  }, 
  text: {
    color: '#3e4053',
  },
  bold: {
    color: '#F2511B',
  }
});

function BugBears() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Bugbears" />
      <CardMedia src={BugBearsPic} component="img" title="Bugbears" />
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p"> */}
        <Typography paragraph variant="body2" className={classes.text}>
          Bugbears is a dynamic web app that lets users log-in and add their
          grievances to a list of ‘pet peeves’. The project uses a PostgreSQL
          database that is connected to a Node.js server and was built using
          HTML, CSS and JavaScript.
        </Typography>
        <Typography paragraph variant="body1"><span className={classes.bold}>Tech stack:</span> HTML, CSS, JavaScript, Node, PostgreSQL, Bcrypt, Tape</Typography>
        <Typography variant="body1"><span className={classes.bold}>Deployment:</span> Heroku</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub link">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="Live site">
          <WebIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BugBears;
