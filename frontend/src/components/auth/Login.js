import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import store from "../../store";
import { login } from "../../actions/auth";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: 'column',
    justifyContent: "center",
    alignContent: "center",
    // textAlign: 'center'
  },
  form: {
    // position: 'absolute',
    // top: '50%',
    // transform: 'translateY(-50%)',
  },
}));

export const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const doneLoading = useSelector((state) => state.auth.doneLoading);

  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("ji");

    const userCredentials = {
      email: email,
      password: password,
    };

    store.dispatch(login(userCredentials));
  };

  const functioncall = () => {
    console.log("authenticated", isAuthenticated);
  };

  return (
      <>

      { doneLoading &&
    
      <div className={classes.root}>
      {isAuthenticated  ? (
        <Redirect to="/" />
      ) : (

        <form onSubmit={onFormSubmit} className={classes.form}>
          {/* <Typography variant='h5'>Sign in</Typography> */}
          <div style={{ textAlign: "center" }}>
            <AccountCircleIcon
              style={{ width: 85, height: 85 }}
              color="secondary"
            />
          </div>
          <br />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => emailOnChangeHandler(e)}
          />
          <br />
          <br />

          <TextField
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => passwordOnChangeHandler(e)}
          />
          <br />
          <br />

          <Button
            color="primary"
            variant="contained"
            style={{ width: "100%" }}
            type="submit"
          >
            Sign in
          </Button>
        </form>
      )}
    </div>
      
}
   
    </>
  );
};
