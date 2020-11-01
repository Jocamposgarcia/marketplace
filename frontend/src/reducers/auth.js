const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  isAuthenticated: false,
  user: null,
  registerSuccessful: false,
  confirmationEmailSent: false,
  doneLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_USER_SUCCESSFUL":
      console.log("reducer", action.payload);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        doneLoading: true,
      };

    case "LOAD_USER_FAIL":
      return {
        ...state,
        doneLoading: true,
        isLoading: false,
    };

    case "LOGIN_SUCCESSFUL":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isLoading: false,
        token: action.payload,
        isAuthenticated: true,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        isLoading: false,
        token: null,
      };

    case "REGISTER_SUCCESSFUL":
      setTimeout(() => {
        return {
          ...state,
          confirmationEmailSent: false,
        };
      }, 1500);

      return {
        ...state,
        registerSuccessful: true,
        confirmationEmailSent: true,

        isLoading: false,
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        isLoading: false,
      };

    case "LOG_OUT_SUCCESSFUL":
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        token: null,
        isAuthenticated: false,
        user: null,
      };

    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    // RESET

    default:
      return state;
  }
}
