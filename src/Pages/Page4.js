import React from "react";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'blue',
      height: '60vh'
    }, 
    container: {
      padding:'2rem',
    }
  }));

  function Page4(){
    const classes = useStyles();

    return(
        <div className={classes.root}>

        </div>

    )
  }

  export default Page4;