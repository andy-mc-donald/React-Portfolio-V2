import React from "react";
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    form: {
        color: '#eef3f5',
        display: "flex",
        flexDirection: "column",
        padding: '1rem'
      },
      formText: {
        color: '#f8a88d'
      },
      button: {
        width: "20%",
        marginTop: "1rem",
        color: '#eef3f5'
      }, 
}));

function ContactForm() {
    const classes = useStyles();

  return (
    <form
      className={classes.form}
      action="mailto:andy.william.mcdonald@gmail.com"
      method="post"
      enctype="text/plain"
    >
      <Typography variant="h6">
        Contact
      </Typography>
      <FormControl color="secondary">
        <InputLabel htmlFor="name" className={classes.formText}>
          Name
        </InputLabel>
        <Input id="name" type="text" className={classes.formText} />
      </FormControl>

      <FormControl color="secondary">
        <InputLabel htmlFor="email" className={classes.formText}>
          Email
        </InputLabel>
        <Input id="email" type="email" className={classes.formText} />
      </FormControl>

      <FormControl color="secondary">
        <InputLabel htmlFor="email" className={classes.formText}>
          Message
        </InputLabel>
        <Input id="email" multiline rows={8} className={classes.formText} />
      </FormControl>

      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="medium"
        buttonStyle={{ borderRadius: 50 }}
        style={{ borderRadius: 50 }}
        type="submit"
        value="Send"
      >
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
