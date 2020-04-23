import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from 'emailjs-com';

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

const ContactForm = props => {
    const classes = useStyles();

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    
    const onChange = e => {
        const { value } = e.target;
        setInputName(value);
      }

      const onChange1 = e => {
        const { value } = e.target;
        setInputEmail(value);
      }

      const onChange2 = e => {
          const { value } = e.target;
          setInputMessage(value);
      }

    const sendEmail = e => {
        e.preventDefault();
        
        const USER_ID = process.env.REACT_APP_USER_ID;

        emailjs.sendForm('gmail', 'contact_form', e.target, USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert(`Thanks for getting in touch!`);

          setInputName('');
          setInputEmail('');
          setInputMessage('');
        }


  return (
    <form
      className={classes.form}
      onSubmit={sendEmail}  
    >
      <Typography variant="h6">
        Contacty
      </Typography>
      <FormControl color="secondary">
        <InputLabel htmlFor="user_name" className={classes.formText}>
          Name
        </InputLabel>
        <Input required={true} type="text" name="user_name" value={inputName} onChange={onChange} className={classes.formText} />
      </FormControl>

      <FormControl color="secondary">
        <InputLabel htmlFor="user_email" className={classes.formText}>
          Email
        </InputLabel>
        <Input required={true} name="user_email" type="email" value={inputEmail} onChange={onChange1} className={classes.formText} />
      </FormControl>

      <FormControl color="secondary">
        <InputLabel htmlFor="message" className={classes.formText}>
          Message
        </InputLabel>
        <Input required={true} name="message" value={inputMessage} onChange={onChange2} multiline rows={8} className={classes.formText} />
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
