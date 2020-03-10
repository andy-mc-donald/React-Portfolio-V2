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
    flexGrow: 1
  }
}));

function Page3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {/* <Typography className={classes.title} variant="h3">
          Projects
        </Typography> */}
      <Grid container>
        <Grid item>
          <UpSkillMe />
        </Grid>
        <Grid item>
          <FoodMiles />
        </Grid>
        <Grid item>
          <BugBears />
        </Grid>
        <Grid item>
          <ProjectFear />
        </Grid>
        <Grid item>
          <WikipediaLookup />
        </Grid>
        <Grid item>
          <Trainspiration />
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default Page3;
