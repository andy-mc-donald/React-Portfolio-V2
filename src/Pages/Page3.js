import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ContactForm from "../Components/ContactForm";
import Social from "../Components/Social";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2B2D42",
  },
  container: {
    padding: "2.5rem",
    "@media (max-width:600px)": {
      padding: "1rem",
    },
  },
}));

function Page3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Social />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default Page3;
