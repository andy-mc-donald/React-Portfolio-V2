import React from "react";
import Grid from "@material-ui/core/Grid";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap"
  }
});

function AboutTechContainer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={24}>
      <Grid item sm spacing="relative">
        <AboutMe />
      </Grid>
      <Grid item sm>
        <TechStack />
      </Grid>
    </Grid>
  );
}

export default AboutTechContainer;
