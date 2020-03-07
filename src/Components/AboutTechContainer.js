import React from "react";
import Grid from "@material-ui/core/Grid";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

function AboutTechContainer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={6}>
        <AboutMe />
      </Grid>
      <Grid item sm={6}>
        <TechStack />
      </Grid>
    </Grid>
  );
}

export default AboutTechContainer;
