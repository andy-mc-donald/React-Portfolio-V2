import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import AndyPic from "../Assets/about-me-images-svgs/Andy_McDonald.jpg";
import Button from "@material-ui/core/Button";
// import { ReactComponent as CSS3 } from "../Assets/tech-stack-icons/CSS3.svg";
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
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  root: {
    background: "rgba(153, 184, 195, 0.17)",
    height: "100vh",
    flexGrow: 1
  },
  githubiconContainer: {
    height: '5vh'
  },
  githubicon: {
    // margin: "2.5rem",
    fontSize: "xl",
    marginRight: "auto",
    flexDirection: "flex-end"
  },
  mainContainer: {
    height: "65vh",
    // maxheight: "100vh"
    overflow: "auto",
    backgroundColor: "grey"
  },
  picContainer: {
    overflow: "hidden"
  },
  picture: {
    width: "140%",
    left: "-50%",
    position: "relative",
    borderRadius: "30%"
  },
  text: {
    marginBottom: 'auto',
    padding: "0px",
    fontSize: 'calc(14px + (45 - 14) * ((100vw - 300px) / (1600 - 300)))',
    // fontSize: "2.6vw",
    // "@media (max-width:1824px)": {
    //   fontSize: "2.8vw"
    // },
    // "@media (max-width:1500px)": {
    //   fontSize: "2.85vw"
    // },
    // "@media (max-width:1320px)": {
    //   fontSize: "3vw"
    // },
    // "@media (max-width:1240px)": {
    //   fontSize: "3.2vw"
    // },
    // "@media (max-width:1164px)": {
    //   fontSize: "3.3vw"
    // },
    // "@media (max-width:1068px)": {
    //   fontSize: "3.4vw"
    // },
    // "@media (max-width:940px)": {
    //   fontSize: "3.5vw"
    // },
    // "@media (max-width:876px)": {
    //   fontSize: "3.65vw"
    // },
    // "@media (max-width:772px)": {
    //   fontSize: "3.8vw"
    // },
    // "@media (max-width: 706px)": {
    //   fontSize: "4vw"
    // },
    // "@media (max-width: 690px)": {
    //   fontSize: "4.2vw"
    // },
    // "@media (max-width: 636px)": {
    //   fontSize: "4.4vw"
    // },
    // "@media (max-width: 573px)": {
    //   fontSize: "4.6vw"
    // },
    // "@media (max-width: 522px)": {
    //   fontSize: "4.75vw"
    // },
    // "@media (max-width: 474px)": {
    //   fontSize: "4.9vw"
    // },
    // "@media (max-width: 420px)": {
    //   fontSize: "5.1vw"
    // },
    // "@media (max-width: 390px)": {
    //   fontSize: "5.3vw"
    // },
    // "@media (max-width: 375px)": {
    //   fontSize: "5.5vw"
    // },
    // "@media (max-width: 356px)": {
    //   fontSize: "5.7vw"
    // },         
  },
  buttonContainer: {
    height: "10vh",
    backgroundColor: "yellow",
  },
  button: {
    width: "40vw",
    maxWidth: "500px",
    fontSize: "1.4rem",
    "@media (max-width:600px)": {
        // width: "50vw",
    fontSize: "1.2rem",
    },
    "@media (max-width:460px)": {
      // width: "50vw",
    fontSize: "1.0rem",
  }, 
  "@media (max-width:403px)": {
    // width: "50vw",
fontSize: "0.8rem",
}
  },
  svgContainer:{
      height: '20vh',
      backgroundColor: 'pink',
      // whiteSpace: 'pre-line'
  }, 
  svgIcon:{
    height: '60px',
    width: '60px',
    padding: theme.spacing(1),
    "@media (max-width: 600px)": {
        height: "50px",
        width: "50px",
      }, 
    "@media (max-width: 528px)": {
        height: "40px",
        width: "40px",
      }, 
      "@media (max-width: 448px)": {
        height: "30px",
        width: "30px",
      }, 
  },
  svgIcon2:{
    height: '40px',
    width: 'auto',
    padding: theme.spacing(2),
    "@media (max-width: 600px)": {
      height: "30px",
      width: "auto",
    }, 
  }
}));

function Page1pt2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       {/* <CssBaseline /> */}
      <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.githubiconContainer}>
        <Grid item>
          <IconButton aria-label="github" className={classes.githubicon}>
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container direction="row" className={classes.mainContainer}>
        <Grid item xs={2} className={classes.picContainer}>
          <img
            src={AndyPic}
            alt="Andy McDonald picture"
            className={classes.picture}
          />
        </Grid>
        <Grid item xs={9} className={classes.text}>
          <h1 style={{ margin: 0 }}>
            Hi, I’m Andy McDonald, a junior software developer, graduate of
            the Founders and Coders bootcamp in London and former journalist.
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
            <img src={HTML5} className={classes.svgIcon}></img>
            <img src={CSS3} className={classes.svgIcon}></img>
            <img src={JavaScript} className={classes.svgIcon}></img>
            <img src={NodeJS} className={classes.svgIcon}></img>
            <img src={ReactLogoSVG} className={classes.svgIcon}></img>
            <img src={Sass} className={classes.svgIcon}></img>
            <img src={GitHub} className={classes.svgIcon}></img>
            <img src={Linux} className={classes.svgIcon}></img>
        </Grid>
        <Grid item xs={12} sm={4}>
            <img src={FAC} className={classes.svgIcon2}></img>
            <img src={FCC} className={classes.svgIcon2}></img>
            <img src={CodeWars} className={classes.svgIcon2}></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page1pt2;
