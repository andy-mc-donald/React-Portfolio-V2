import React from "react";
// import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import AndyPic from "../Assets/about-me-images-svgs/Andy_McDonald.jpg";
// import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as FAC } from "../Assets/about-me-images-svgs/FAC_logo.svg";
import { ReactComponent as FCC } from "../Assets/about-me-images-svgs/FreeCodeCamp.svg";
import { ReactComponent as CodeWars } from "../Assets/about-me-images-svgs/Codewars_logo.svg";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    // padding: 10
  },
  title: {
    paddingBottom: '3%'
  },
  picture: {
    // height: 'auto',
    // width: '50%',
    height: "350px",
    width: "auto",
    maxWidth: "350px",
    maxHeight: "350px",
    // maxHeight: '350px',
    // padding: '10%',
    // paddingTop: '5%',
    borderRadius: "50%"
  },
  description: {
    paddingTop: '3%',
    maxWidth: "350px"
  },
  // iconBox: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justify: 'space-around'
  // }, 
  icon: {
    maxWidth: '350px',
    width: "auto",
    height: "70px",
    padding: "8px"   
  }

});

function AboutMe() {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <Typography className={classes.title} variant="h3">
        About me
      </Typography>
      <CardMedia
        className={classes.picture}
        src={AndyPic}
        component="img"
        title="Headshot"
      />
      <CardContent>
        <Typography variant="body1" className={classes.description}>
          I am a software developer, a recent graduate of the Founders and
          Coders bootcamp in London and a former journalist. Currently seeking a
          full-time junior dev role. I am a software developer, a recent graduate of the Founders and
          Coders bootcamp in London and a former journalist. Currently seeking a
          full-time junior dev role.
        </Typography>
      </CardContent>
      <div justify="space-around">
      <FAC className={classes.icon}/>
      <FCC className={classes.icon}/>
      <CodeWars className={classes.icon}/>
      </div>
    </Card>
  );
}
export default AboutMe;
