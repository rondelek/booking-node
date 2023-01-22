import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

const initialState = {
  alertType: "",
  alertText: "",
  showAlert: false,
  isLoading: false,
  user: null,
  token: null,
  userLocation: "",
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

  const registerUser = async (currentUser) => {
    dispatch({ type: "REGISTER_USER_BEGIN" });

    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token, location } = response.data;
      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: { user, token, location },
      });
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
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
