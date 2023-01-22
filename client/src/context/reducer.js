import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === "DISPLAY_ALERT_ERROR") {
    return {
      ...state,
      showAlert: true,
      alertType: "error",
      alertText: "Provide all values.",
    };
  }

  if (action.type === "CLEAR_ALERT") {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === "REGISTER_USER_BEGIN") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "REGISTER_USER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User registered! Redirecting...",
    };
  }

  if (action.type === "REGISTER_USER_ERROR") {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "error",
      alertText: action.payload.msg,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
