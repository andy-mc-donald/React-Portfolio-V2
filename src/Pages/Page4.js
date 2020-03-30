import React from "react";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "pink"
    // height: "60vh",
    // textAlign: 'center'
  },
  container: {
    padding: "2rem"
  },
  item: {
    // textAlign: "center",
    // display: 'flex',
    // justifyContent: "center",
    // alignItems: 'center'
    // margin: '0 auto'
  },
  card: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    boxShadow: "none",
    // paddingLeft: '30%',
    height: "4rem"
    // padding: '1rem'
    // width: '50%',
  },
  cardCont: {
    // display: "flex",
    // flexDirection: "column",
    padding: 0
  },

  form: {
    display: "flex",
    flexDirection: "column"
    // margin: 20,
    // padding: 20,
  },

  button: {
    width: "20%",
    marginTop: "1rem"
  }
}));

function Page4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.item}>
          <div className={classes.cardCont}>
            <Card className={classes.card}>
              <div>
                <CardContent>
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </CardContent>
              </div>
              <div>
                <CardContent>
                  <h3>GitHub</h3>
                </CardContent>
              </div>
            </Card>

            <Card className={classes.card}>
              <div>
                <CardContent>
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                </CardContent>
              </div>
              <div>
                <CardContent>
                  <h3>LinkedIn</h3>
                </CardContent>
              </div>
            </Card>

            <Card className={classes.card}>
              <div>
                <CardContent>
                  <IconButton>
                    <GetAppIcon />
                  </IconButton>
                </CardContent>
              </div>
              <div>
                <CardContent>
                  <h3>CV</h3>
                </CardContent>
              </div>
            </Card>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.item}>
          <form className={classes.form}>
            <h2>Contact</h2>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" type="text" />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="email">Message</InputLabel>
              <Input id="email" multiline rows={8} />
            </FormControl>

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="medium"
              buttonStyle={{ borderRadius: 50 }}
              style={{ borderRadius: 50 }}
            >
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page4;
