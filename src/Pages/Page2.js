import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Template from "../Projects/Template";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "rgba(242, 81, 27, 0.35)",
  },
  root: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  title: {
    color: "#eef3f5",
    textShadow: "2px 2px #2b2d42",
    paddingLeft: "3.3rem",
    paddingTop: "1.5rem",
    ["@media (max-width:600px)"]: {
      paddingLeft: "1.2rem",
      paddingTop: "1.5rem",
    },
  },
}));

function Page2() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Typography className={classes.title} variant="h4">
        Projects
      </Typography>
      <div className={classes.root}>
        <Template />
      </div>
    </div>
  );
}

export default Page2;
