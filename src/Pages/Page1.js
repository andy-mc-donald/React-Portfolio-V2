import React from "react";
import {
  makeStyles,
  Grid,
  IconButton,
  Button,
  Tooltip,
} from "@material-ui/core/";
import GitHubIcon from "@material-ui/icons/GitHub";
import AndyPic from "../Assets/about-me-images-svgs/Andy_McDonald.jpg";
import CSS3 from "../Assets/tech-stack-icons/CSS3.svg";
import GitHub from "../Assets/tech-stack-icons/GitHub.svg";
import HTML5 from "../Assets/tech-stack-icons/HTML5.svg";
import JavaScript from "../Assets/tech-stack-icons/JavaScript.svg";
import Linux from "../Assets/tech-stack-icons/Linux.svg";
import NodeJS from "../Assets/tech-stack-icons/NodeJS.svg";
import ReactLogoSVG from "../Assets/tech-stack-icons/React.svg";
import Sass from "../Assets/tech-stack-icons/Sass.svg";
import FAC from "../Assets/about-me-images-svgs/FAC_logo.svg";
import FCC from "../Assets/about-me-images-svgs/FreeCodeCamp.svg";
import CodeWars from "../Assets/about-me-images-svgs/Codewars_logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#eef3f5",
    height: "100vh",
    flexGrow: 1,
  },
  githubiconContainer: {
    height: "5vh",
  },
  githubicon: {
    fontSize: "xl",
    marginRight: "auto",
    flexDirection: "flex-end",
  },
  mainContainer: {
    height: "65vh",
    overflow: "auto",
  },
  picContainer: {
    overflow: "hidden",
  },
  picture: {
    width: "140%",
    left: "-50%",
    position: "relative",
    borderRadius: "30%",
  },
  text: {
    color: "#2b2d42",
    marginBottom: "auto",
    padding: "0px",
    fontSize: "calc(15px + (100 - 15) * ((100vw - 320px) / (1980 - 320)))",
    "@media screen and (min-aspect-ratio: 5/8)": {
      fontSize: "calc(20px + (45 - 20) * ((100vw - 320px) / (1980 - 320)))",
    },
  },
  buttonContainer: {
    height: "10vh",
  },
  button: {
    color: "#eef3f5",
    width: "40vw",
    maxWidth: "500px",
    fontSize: "1.4rem",
    "@media (max-width:600px)": {
      fontSize: "1.2rem",
    },
    "@media (max-width:460px)": {
      fontSize: "1.0rem",
    },
    "@media (max-width:403px)": {
      fontSize: "0.8rem",
    },
    "@media (max-width:344px)": {
      fontSize: "0.6rem",
    },
  },
  svgContainer: {
    height: "20vh",
    paddingLeft: "2.5rem",
    paddingBottom: "1rem",
    "@media (max-width:600px)": {
      paddingLeft: "0.5rem",
    },
  },
  svgIcon: {
    height: "60px",
    width: "60px",
    padding: theme.spacing(1),
    "@media (max-width: 600px)": {
      height: "50px",
      width: "50px",
    },
    "@media (max-width: 528px)": {
      height: "40px",
      width: "40px",
    },
    "@media (max-width: 457px)": {
      height: "30px",
      width: "30px",
    },
    "@media (max-width: 377px)": {
      height: "29px",
      width: "29px",
    },
    "@media (max-width: 368px)": {
      height: "28px",
      width: "28px",
    },
    "@media (max-width: 360px)": {
      height: "26px",
      width: "26px",
    },
    "@media (max-width: 353px)": {
      height: "25px",
      width: "25px",
    },
    "@media (max-width: 337px)": {
      height: "24px",
      width: "24px",
    },
    "@media (max-width: 327px)": {
      height: "23px",
      width: "23px",
    },
  },
  svgIcon2: {
    height: "40px",
    width: "auto",
    margin: "0",
    display: "inline-block",
    minHeight: 0,
    minWidth: 0,
    padding: theme.spacing(0),
    "@media (max-width: 600px)": {
      height: "30px",
      width: "auto",
    },
    "@media (max-width: 457px)": {
      height: "28px",
      width: "auto",
    },
  },
  textAccent: {
    color: "#F2511B",
  },
}));

function Page1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        className={classes.githubiconContainer}
      >
        <Grid item>
          <IconButton
            target="_blank"
            href="https://github.com/andy-mc-donald"
            aria-label="github"
            className={classes.githubicon}
          >
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container direction="row" className={classes.mainContainer}>
        <Grid item xs={2} className={classes.picContainer}>
          <img
            src={AndyPic}
            alt="Andy McDonald"
            className={classes.picture}
          />
        </Grid>
        <Grid item xs={9} className={classes.text}>
          <h1 style={{ margin: 0 }} color="secondary">
            Hi, I’m Andy McDonald, a junior{" "}
            <span className={classes.textAccent}>software developer</span>,
            graduate of the Founders and Coders bootcamp in London and former
            journalist
          </h1>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Grid item>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href=""
            buttonStyle={{ borderRadius: 50 }}
            style={{ borderRadius: 50 }}
            className={classes.button}
          >
            Download CV
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.svgContainer}
      >
        <Grid item xs={12} sm={8}>
          <Tooltip title="HTML5" arrow>
            <img src={HTML5} className={classes.svgIcon} alt="HTML5"></img>
          </Tooltip>
          <Tooltip title="CSS3" arrow>
            <img src={CSS3} className={classes.svgIcon} alt="CSS3"></img>
          </Tooltip>
          <Tooltip title="JavaScript / ES6" arrow>
            <img src={JavaScript} className={classes.svgIcon} alt="JavaScript ES6"></img>
          </Tooltip>
          <Tooltip title="Node.js" arrow>
            <img src={NodeJS} className={classes.svgIcon} alt="Node.js"></img>
          </Tooltip>
          <Tooltip title="React" arrow>
            <img src={ReactLogoSVG} className={classes.svgIcon} alt="React"></img>
          </Tooltip>
          <Tooltip title="Sass" arrow>
            <img src={Sass} className={classes.svgIcon} alt="Sass"></img>
          </Tooltip>
          <Tooltip title="Git / GitHub" arrow>
            <img src={GitHub} className={classes.svgIcon} alt="Git GitHub"></img>
          </Tooltip>
          <Tooltip title="Linux" arrow>
            <img src={Linux} className={classes.svgIcon} alt="Linux"></img>
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IconButton
            target="_blank"
            href="https://www.foundersandcoders.com/"
            aria-label="Founders and Coders"
            padding={0}
          >
            <img src={FAC} className={classes.svgIcon2} alt="Founders and Coders"></img>
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.freecodecamp.org/andy-mc-donald"
            aria-label="Free Code Camp"
          >
            <img src={FCC} className={classes.svgIcon2} alt="Free Code Camp"></img>
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.codewars.com/users/andy-mc-donald"
            aria-label="Codewars"
          >
            <img src={CodeWars} className={classes.svgIcon2} alt="CodeWars"></img>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page1;
