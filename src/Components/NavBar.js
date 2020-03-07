import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    opacity: 0.8,
    border: 0,
    padding: "0 30px"
  },
  icon: {
    color: "white",
    fontSize: "xl",
    height: 40,
    marginLeft: "auto"
  }
});

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <IconButton aria-label="github" className={classes.icon}>
        <GitHubIcon />
      </IconButton>
    </AppBar>
  );
}

export default NavBar;
