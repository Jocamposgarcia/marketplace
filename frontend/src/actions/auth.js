import axios from "axios";

export const loadUser = () => (dispatch, getState) => {
  dispatch(isLoading());

  axios
    .get(
      `${process.env.REACT_APP_API_URL}/rest-auth/user/`,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log("resp", res);
      dispatch({
        type: "LOAD_USER_SUCCESSFUL",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: "LOAD_USER_FAIL" });
    });
};

export const login = (body) => (dispatch) => {
  dispatch(isLoading());

  axios
    .post(`${process.env.REACT_APP_API_URL}/rest-auth/login/`, body)
    .then((resp) => {
      dispatch({
        type: "LOGIN_SUCCESSFUL",
        payload: resp.data.key,
      });
      dispatch(loadUser());
    })
    .catch((err) => {
      localStorage.clear();
      dispatch({ type: "LOGIN_FAIL" });
    });
};

export const register = (body) => (dispatch) => {
  dispatch(isLoading());

  axios
    .post(`${process.env.REACT_APP_API_URL}/rest-auth/registration/`, body)
    .then((resp) => {
      dispatch({
        type: "REGISTER_SUCCESSFUL",
      });
    })

    .catch((err) => {
      dispatch({ type: "REGISTER_FAIL" });
    });
};

export const isLoading = () => (dispatch) => {
  console.log("isLoading");
  dispatch({
    type: "IS_LOADING",
  });
};

export const logOut = () => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/rest-auth/logout/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: "LOG_OUT_SUCCESSFUL",
      });
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;
  console.log("token", token);
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token exists, add to headers
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
