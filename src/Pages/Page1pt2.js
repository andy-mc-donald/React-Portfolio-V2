import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import AndyPic from "../Assets/about-me-images-svgs/Andy_McDonald.jpg";
import Button from "@material-ui/core/Button";
import { ReactComponent as CSS3 } from "../Assets/tech-stack-icons/CSS3.svg";
import { ReactComponent as GitHub } from "../Assets/tech-stack-icons/GitHub.svg";
import { ReactComponent as HTML5 } from "../Assets/tech-stack-icons/HTML5.svg";
import { ReactComponent as JavaScript } from "../Assets/tech-stack-icons/JavaScript.svg";
import { ReactComponent as Linux } from "../Assets/tech-stack-icons/Linux.svg";
import { ReactComponent as NodeJS } from "../Assets/tech-stack-icons/NodeJS.svg";
import { ReactComponent as ReactLogoSVG } from "../Assets/tech-stack-icons/React.svg";
import { ReactComponent as Sass } from "../Assets/tech-stack-icons/Sass.svg";
import { ReactComponent as FAC } from "../Assets/about-me-images-svgs/FAC_logo.svg";
import { ReactComponent as FCC } from "../Assets/about-me-images-svgs/FreeCodeCamp.svg";
import { ReactComponent as CodeWars } from "../Assets/about-me-images-svgs/Codewars_logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    background: "rgba(153, 184, 195, 0.17)",
    height: "100vh",
    flexGrow: 1
  },
  container: {
    // width: "100%",
    // margin: "2.5rem",
    // ["@media (max-width:600px)"]: {
    //   margin: "0.5rem"
    // }
  },
  githubicon: {
    fontSize: "xl",
    marginLeft: "auto",
    flexDirection: 'flex-end'
    // margin: "2.5rem",
  }
}));

function Page1pt2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item>
          <IconButton aria-label="github" className={classes.githubicon}>
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page1pt2;
