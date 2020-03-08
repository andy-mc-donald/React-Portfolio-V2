import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "90vh",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "$gradient 30s ease infinite"
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%"
    },
    "50%": {
      backgroundPosition: "100% 50%"
    },
    "100%": {
      backgroundPosition: "0% 50%"
    }
  },
  text: {
    color: "white"
  },
  arrow: {
    fontSize: "2rem",
    color: "white",
    // display: 'flex',
    // alignItems: 'flex-end'
    // paddingTop: 100
  }
}));

function LandingText() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      // spacing={24}
      // spacing={4}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={0}>
        <Typography
          className={classes.text}
          variant="h2"
          align="center"
        >
          Andy McDonald
        </Typography>
        </Grid>

        <Grid item xs={0}>
        <Typography
          className={classes.text}
          variant="h2"
          align="center"
        >
          Software Developer
        </Typography>
      </Grid>
      <Grid item xs={0} className={classes.arrow}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
}
export default LandingText;
