import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AndyPic from "../Assets/about-me-images-svgs/Andy_McDonald.jpg";
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


const useStyles = makeStyles(theme =>({
    root:{
        background: 'rgba(153, 184, 195, 0.17)',
        height: '100vh',
    },
}))

function Page1pt2(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            
        </div>
    )
}

export default Page1pt2;