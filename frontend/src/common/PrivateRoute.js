import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Login } from "../components/auth/Login";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.doneLoading) {
      if (!auth.isAuthenticated) {
        return <Login />;
      } else {
        return <Component {...props} />;
      }
    }}
  }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
