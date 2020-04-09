import React from "react";
import data from "../data.js"; 
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

function Template() {
    const classes = useStyles();
    const input = data; 
  return (
    <div>
      {input.map(x =>{ 
    return(
    <Card className={classes.root} id={x.id}>
      <CardHeader title={x.name} />
      <CardMedia src={x.image} component="img" title={x.name} />
      <CardContent>
        <Typography paragraph variant="body2" className={classes.text}>
          {x.description}
        </Typography>
    <Typography paragraph variant="body1"><span className={classes.bold}>Tech stack:</span> {x.techStack}</Typography>
        <Typography variant="body1"><span className={classes.bold}>Deployment:</span> {x.deployment}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
          target="_blank"
          href={x.gitHubLink}
          aria-label="GitHub link"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          target="_blank"
          href={x.liveLink}
          aria-label="Live site"
        >
          <WebIcon />
        </IconButton>
      </CardActions>
    </Card>
    )
    })}
    </div>
  );
}

export default Template;
