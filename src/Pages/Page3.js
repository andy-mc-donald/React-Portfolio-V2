import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import UpSkillMe from "../Projects/UpSkillMe";
import FoodMiles from "../Projects/FoodMiles";
import BugBears from "../Projects/BugBears";
import ProjectFear from "../Projects/ProjectFear";
import WikipediaLookup from "../Projects/WikipediaLookup";
import Trainspiration from "../Projects/Trainspiration";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "rgba(242, 81, 27, 0.35)",
  },
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "rgba(242, 81, 27, 0.35)"
    // backgroundColor: "#8d99ae"
    // width: '100%'
  },
  container: {
    // padding: '2rem',
    width: "100%",
    margin: "2.5rem",
    ["@media (max-width:600px)"]: {
      margin: "0.5rem"
    }
  },
  title: {
    color: '#eef3f5',
    textShadow: '2px 2px #2b2d42',
    paddingLeft: "3.3rem",
    paddingTop: "1.5rem",
    // paddingBottom: "-1.5rem",
    ["@media (max-width:600px)"]: {
      paddingLeft: "1.2rem",
      paddingTop: "1.5rem",
      // paddingBottom: "1.5rem"
    }
  }
}));

function Page3() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Typography className={classes.title} variant="h4">
        Projects
      </Typography>
      <div className={classes.root}>
        <Grid container className={classes.container} spacing={3}>
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
    </div>
  );
}

export default Page3;
