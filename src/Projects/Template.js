import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import data from "./data";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  text: {
    color: "#3e4053",
  },
  bold: {
    color: "#F2511B",
  },
  container: {
    width: "100%",
    margin: "2.5rem",
    ["@media (max-width:600px)"]: {
      margin: "0.5rem",
    },
  },
});

function Template() {
  const classes = useStyles();
  const input = data;
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={3}>
        {input.map((x) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card id={x.id}>
                <CardHeader title={x.name} />
                <CardMedia src={x.image} component="img" title={x.name} />
                <CardContent>
                  <Typography
                    paragraph
                    variant="body2"
                    className={classes.text}
                  >
                    {x.description}
                  </Typography>
                  <Typography paragraph variant="body1">
                    <span className={classes.bold}>Tech stack:</span>{" "}
                    {x.techStack}
                  </Typography>
                  <Typography variant="body1">
                    <span className={classes.bold}>Deployment:</span>{" "}
                    {x.deployment}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    target="_blank"
                    href={x.gitHubLink}
                    aria-label="GitHub link"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    href={x.liveLink}
                    aria-label="Live site"
                  >
                    <WebIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Template;
