import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import UpSkillMe from "../Projects/UpSkillMe";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function Page3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography className={classes.title} variant="h3">
          Projects
        </Typography>
      <Grid container>
        <Grid item>
          <UpSkillMe />
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default Page3;
