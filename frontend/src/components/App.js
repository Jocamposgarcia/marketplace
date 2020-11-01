import React, { useEffect } from "react";
import { loadUser } from "../actions/auth";
import store from "../store";
import { BrowserRouter, Link, NavLink, Route } from "react-router-dom";
import { Login } from "./auth/Login";
import Header from "./header/";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../MUI/theme";
import Register from "./auth/Register";
import { Provider } from "react-redux";
import RegisterSuccessful from "./auth/RegisterSuccessful";
import PrivateRoute from '../common/PrivateRoute'
import Home from "./Home";
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Header />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/register" component={Register} />
            {/* <PrivateRoute exact path="/register-successful" component={RegisterSuccessful}/> */}
            
            </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
