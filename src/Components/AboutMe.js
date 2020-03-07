import React from "react";
// import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import AndyPic from '../Assets/about-me-images-svgs/Andy_McDonald.jpg';

const useStyles = makeStyles({
  root: {
    height: "90vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: 10
  },
  text:{
    paddingBottom: 20,
  },
  media:{
    // height: 'auto',
    // width: '50%',
    height: '45%',
    width: 'auto',
    maxWidth: '350px',
    // maxHeight: '350px',
    // padding: '10%',
    // paddingTop: '5%',
    borderRadius: '50%'
  }
});

function AboutMe() {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <Typography className={classes.text} variant="h3">About me</Typography>
      <CardMedia
        className={classes.media}
        src={AndyPic}
        component= 'img'
        title="Headshot"
        // xs={8}
        // sm={2}
      />
    </Card>
    );
}
export default AboutMe;
