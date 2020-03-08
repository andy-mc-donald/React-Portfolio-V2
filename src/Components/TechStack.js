import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ReactComponent as CSS3 } from '../Assets/tech-stack-icons/CSS3.svg';
import { ReactComponent as GitHub } from '../Assets/tech-stack-icons/GitHub.svg';
import { ReactComponent as HTML5 } from '../Assets/tech-stack-icons/HTML5.svg';
import { ReactComponent as JavaScript } from '../Assets/tech-stack-icons/JavaScript.svg';
import { ReactComponent as Linux } from '../Assets/tech-stack-icons/Linux.svg';
import { ReactComponent as NodeJS } from '../Assets/tech-stack-icons/NodeJS.svg';
import { ReactComponent as ReactLogoSVG } from '../Assets/tech-stack-icons/React.svg';
import { ReactComponent as Sass } from '../Assets/tech-stack-icons/Sass.svg';

const useStyles = makeStyles({
  root: {
    height: "90vh",
    textAlign: "center"
  },
  icons: {
      width: '200px',
      height: 'auto'
  }
});

function TechStack() {
  const classes = useStyles();
  return (
    <div className={classes.root} elevation={2}>
      <Typography variant="h3">Tech Stack</Typography>
      <Box component="span" display="block">
        <JavaScript className={classes.icons} />
        <HTML5 className={classes.icons} />
        <CSS3 className={classes.icons} />
        {/* <ReactLogoSVG className={classes.icons} /> */}
      </Box>
      <Box component="span" display="block">
        <ReactLogoSVG className={classes.icons}/>
        {/* <HTML5 className={classes.icons} /> */}
        <NodeJS className={classes.icons} />
        <Sass className={classes.icons} />
      </Box>
      <Box component="span" display="block">
        <GitHub className={classes.icons} />
        <Linux className={classes.icons} />
      </Box>
    </div>
  );
}
export default TechStack;
