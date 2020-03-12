import React from "react";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
    height: "60vh",
    color: "white"
  },
  container: {
    padding: "2rem"
  },
  item: {
    textAlign: 'center'
  }
}));

function Page4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.item}>
          <h2>Contact</h2>
          <p>Blah blah blah</p>
          <p>Blah blah blah</p>
          <p>Blah blah blah blah ah </p>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.item}>
          <h3>different text</h3>
          <p>Blah blah blah</p>
          <p>Blah blah blah</p>
          <p>Blah blah blah</p>
          <p>Blah blah blah</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page4;
