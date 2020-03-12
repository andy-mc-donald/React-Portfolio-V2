import React from "react";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import UpSkillMe from "../Projects/UpSkillMe";
import FoodMiles from "../Projects/FoodMiles";
import BugBears from "../Projects/BugBears";
import ProjectFear from "../Projects/ProjectFear";
import WikipediaLookup from "../Projects/WikipediaLookup";
import Trainspiration from "../Projects/Trainspiration";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // spacing: 3
  }, 
  container: {
    padding:'2rem',
  }
}));

function Page3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {/* <Typography className={classes.title} variant="h3">
          Projects
        </Typography> */}
      <Grid className={classes.container} container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <UpSkillMe />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FoodMiles />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BugBears />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectFear />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <WikipediaLookup />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Trainspiration />
        </Grid>
      </Grid>
    </div>
  );
}

export default Page3;
