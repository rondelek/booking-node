import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  alertType: "",
  alertText: "",
  showAlert: false,
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlertError = () => {
    dispatch({ type: "DISPLAY_ALERT_ERROR" });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = ({ user, token, location }) => {
    localStorage.removeItem("user", user);
    localStorage.removeItem("token", token);
    localStorage.removeItem("location", location);
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: "REGISTER_USER_BEGIN" });

    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token, location } = response.data;
      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: "LOGIN_USER_BEGIN" });

    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token, location } = data;
      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: "LOGIN_USER_ERROR",
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const setupUser = async ({ currentUser, endpoint, alertText }) => {
    dispatch({ type: "SETUP_USER_BEGIN" });

    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endpoint}`,
        currentUser
      );
      const { user, token, location } = data;
      dispatch({
        type: "SETUP_USER_SUCCESS",
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: "SETUP_USER_ERROR",
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
    removeUserFromLocalStorage();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        logoutUser,
        setupUser,
        displayAlertError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
