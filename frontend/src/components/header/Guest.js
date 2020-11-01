import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //     marginBottom: 15,
  //   },

  AppBarContent: {
    display: "flex",
  },

  loginButton: {
    marginLeft: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.AppBarContent}>
          <Button className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
