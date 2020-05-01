import React from "react";
import {
//   Grid,
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
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#2B2D42",
//   },
//   container: {
//     padding: "2.5rem",
//     "@media (max-width:600px)": {
//       padding: "1rem",
//     },
//   },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2B2D42",
    boxShadow: "none",
    height: "4rem",
  },
//   form: {
//     color: "#eef3f5",
//     display: "flex",
//     flexDirection: "column",
//     padding: "1rem",
//   },
//   button: {
//     width: "20%",
//     marginTop: "1rem",
//     color: "#eef3f5",
//   },
//   formText: {
//     color: "#f8a88d",
//   },
}));

function Social() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <Grid container className={classes.container}>
    //     <Grid item xs={12} sm={6} className={classes.item}>
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
    //     </Grid>

    //   </Grid>
    // </div>
  );
}

export default Social;
