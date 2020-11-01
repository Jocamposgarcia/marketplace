import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { register } from "../../actions/auth";
import store from "../../store";
import { useSelector } from "react-redux";
// import { Redirect } from "react-router";

const useStyles = makeStyles({
  root: {
    // margin: "auto",
    // width: "100%",
    // display: "block",
  },

  textField: {
    display: "block",
    margin: "auto",
    marginBottom: 8,
    maxWidth: 250,
  },

  signUpButton: {
    margin: "auto",
    maxWidth: 250,
    display: "block",
    marginTop: 20,
  },
});

const Register = () => {
  const classes = useStyles();
  const confirmationEmailSent = useSelector(
    (state) => state.auth.confirmationEmailSent
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const signUpOnClickHandler = (e) => {
    e.preventDefault();

    const userInfo = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password1: password1,
      password2: password2,
    };

    store.dispatch(register(userInfo));
  };

  return (
    <div className={classes.root}>
      <form onSubmit={signUpOnClickHandler}>
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={classes.textField}
        />
        <br />

        <TextField
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={classes.textField}
          fullWidth
        />
        <br />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.textField}
          fullWidth
        />
        <br />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          className={classes.textField}
          fullWidth
        />
        <br />

        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className={classes.textField}
          fullWidth
        />

        <Button
          fullWidth
          className={classes.signUpButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign up
        </Button>
      </form>

      {/* {confirmationEmailSent && <Redirect to="/register-successful" />} */}
    </div>
  );
};

export default Register;
