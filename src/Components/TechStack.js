import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        height: '90vh'
    }
  });

function TechStack(){
    const classes = useStyles();
    return(
        <Paper 
        className={classes.root}
        elevation={2}>
            <Typography>
                Tech Stack
            </Typography>
        </Paper>
    )
}
export default TechStack;