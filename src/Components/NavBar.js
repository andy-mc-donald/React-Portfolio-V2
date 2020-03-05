import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    opacity: 0.8,
    border: 0,
    padding: "0 30px"
  },
  icon: {
    color: 'white',
    fontSize: 'xl',
    height: 40,
    marginLeft: "auto"
  }
});

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <GitHubIcon className={classes.icon}></GitHubIcon>
    </AppBar>
  );
}

export default NavBar;
