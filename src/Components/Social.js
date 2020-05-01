import React from "react";
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2B2D42",
    boxShadow: "none",
    height: "4rem",
  }
}));

function Social() {
  const classes = useStyles();

  return (
          <div>
            <Card className={classes.card}>
              <div>
                <CardContent>
                  <IconButton
                    target="_blank"
                    href="https://github.com/andy-mc-donald"
                    size="small"
                  >
                    <GitHubIcon style={{ fill: "#eef3f5" }} />
                  </IconButton>
                </CardContent>
              </div>
              <div>
                <CardContent>
                  <Link
                    color="textSecondary"
                    target="_blank"
                    href="https://github.com/andy-mc-donald"
                  >
                    <Typography variant="h6">GitHub</Typography>
                  </Link>
                </CardContent>
              </div>
            </Card>

            <Card className={classes.card}>
              <div>
                <CardContent>
                  <IconButton
                    target="_blank"
                    href="https://www.linkedin.com/in/andy-mc-donald/"
                    size="small"
                  >
                    <LinkedInIcon style={{ fill: "#eef3f5" }} />
                  </IconButton>
                </CardContent>
              </div>
              <div>
                <CardContent>
                  <Link
                    color="textSecondary"
                    target="_blank"
                    href="https://www.linkedin.com/in/andy-mc-donald/"
                  >
                    <Typography variant="h6">LinkedIn</Typography>
                  </Link>
                </CardContent>
              </div>
            </Card>

            <Card className={classes.card}>
              <div>
                <CardContent>
                  <IconButton size="small">
                    <GetAppIcon style={{ fill: "#eef3f5" }} />
                  </IconButton>
                </CardContent>
              </div>
              <div>
                <CardContent>
                  <Link color="textSecondary">
                    <Typography variant="h6">CV</Typography>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
  );
}

export default Social;
