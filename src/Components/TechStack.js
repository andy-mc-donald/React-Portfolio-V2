import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ReactComponent as CSS3 } from "../Assets/tech-stack-icons/CSS3.svg";
import { ReactComponent as GitHub } from "../Assets/tech-stack-icons/GitHub.svg";
import { ReactComponent as HTML5 } from "../Assets/tech-stack-icons/HTML5.svg";
import { ReactComponent as JavaScript } from "../Assets/tech-stack-icons/JavaScript.svg";
import { ReactComponent as Linux } from "../Assets/tech-stack-icons/Linux.svg";
import { ReactComponent as NodeJS } from "../Assets/tech-stack-icons/NodeJS.svg";
import { ReactComponent as ReactLogoSVG } from "../Assets/tech-stack-icons/React.svg";
import { ReactComponent as Sass } from "../Assets/tech-stack-icons/Sass.svg";
// import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    textAlign: "center"
  },
  icons: {
    width: "200px",
    // minWidth: "100px",
    height: "auto",
    ['@media (max-width:1200px)']: {
        width: "120px",
        height: "auto"

    }
  }
});

function TechStack() {
  const classes = useStyles();
  return (
    <div className={classes.root} elevation={2}>
      <Typography variant="h3">Tech Stack</Typography>
      <Box component="span" display="block">
        <Tooltip title="JavaScript / ES6">
          <JavaScript className={classes.icons} />
        </Tooltip>
        <Tooltip title="HTML5">
          <HTML5 className={classes.icons} />
        </Tooltip>
        <Tooltip title="CSS3">
          <CSS3 className={classes.icons} />
        </Tooltip>
        {/* <ReactLogoSVG className={classes.icons} /> */}
      </Box>
      <Box component="span" display="block">
        <Tooltip title="React">
          <ReactLogoSVG className={classes.icons} />
        </Tooltip>
        <Tooltip title="Node.js">
          <NodeJS className={classes.icons} />
        </Tooltip>
        <Tooltip title="Sass">
          <Sass className={classes.icons} />
        </Tooltip>
      </Box>
      <Box component="span" display="block">
        <Tooltip title="Git / GitHub">
          <GitHub className={classes.icons} />
        </Tooltip>
        <Tooltip title="Linux">
          <Linux className={classes.icons} />
        </Tooltip>
      </Box>
    </div>
  );
}
export default TechStack;
