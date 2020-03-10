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
import UpSkillMeP

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    }
})

function UpSkillMe() {
const classes = useStyles();
return (
    <Card className={classes.root}>
      <CardHeader title="UpSkillMe" />
      <CardMedia image="../Assets/project-images/UpSkillMe.png" title="UpSkillMe" />
      <CardContent>ic
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui
          erat, dictum vitae tellus ac, malesuada venenatis nunc. Curabitur
          ornare orci at semper laoreet. Aliquam sed dignissim eros. Nullam
          varius consectetur euismod. Aliquam hendrerit tincidunt diam.
        </Typography>
        <Typography>
            Tech stack: Lorem, ipsum, dolor, sit amet
        </Typography>
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

export default UpSkillMe;