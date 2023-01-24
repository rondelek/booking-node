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

  if (action.type === "SETUP_USER_BEGIN") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "SETUP_USER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === "SETUP_USER_ERROR") {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "error",
      alertText: action.payload.msg,
    };
  }

  if (action.type === "UPDATE_USER_BEGIN") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "UPDATE_USER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Profile updated!",
    };
  }

  if (action.type === "UPDATE_USER_ERROR") {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "error",
      alertText: action.payload.msg,
    };
  }

  if (action.type === "LOGOUT_USER") {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: null,
    };
  }

  if (action.type === "HANDLE_CHANGE") {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === "CLEAR_VALUES") {
    const initialState = {
      name: "",
      level: "",
      type: "",
      groupLimit: 0,
      price: 0,
      startsAt: "",
    };

    return {
      ...state,
      ...initialState,
    };
  }

  if (action.type === "CREATE_COURSE_BEGIN") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "CREATE_COURSE_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Course created!",
    };
  }

  if (action.type === "CREATE_COURSE_ERROR") {
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
