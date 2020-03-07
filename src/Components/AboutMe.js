import React from "react";
// import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    textAlign: "center"
  }
});

function AboutMe() {
  const classes = useStyles();
  return (
    // <Paper className={classes.root} elevation={2}>
    <Card>
      <Typography variant="h3">About me</Typography>
    </Card>
    // </Paper>
  );
}
export default AboutMe;
