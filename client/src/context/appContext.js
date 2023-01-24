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
  name: "",
  level: "",
  type: "",
  groupLimit: 0,
  price: 0,
  startsAt: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response
  authFetch.interceptors.request.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

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
    console.log("logout");
    localStorage.removeItem("user", user);
    localStorage.removeItem("token", token);
    localStorage.removeItem("location", location);
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
    removeUserFromLocalStorage({ user, token });
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: "UPDATE_USER_BEGIN" });

    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, token } = data;
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: "UPDATE_USER_ERROR",
          payload: { msg: error.response.data.msg },
        });
      }

      clearAlert();
    }
  };

  const handleChange = ({ name, value }) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: { name, value },
    });
  };

  const clearValues = () => {
    dispatch({ type: "CLEAR_VALUES" });
  };

  const createCourse = async () => {
    dispatch({ type: "CREATE_COURSE_BEGIN" });

    try {
      const { name, level, type, groupLimit, price, startsAt } = state;
      await authFetch.post("/courses", {
        name,
        level,
        type,
        groupLimit,
        price,
        startsAt,
      });
      dispatch({ type: "CREATE_COURSE_SUCCESS" });
      clearValues();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: "CREATE_COURSE_ERROR",
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        logoutUser,
        setupUser,
        updateUser,
        displayAlertError,
        clearAlert,
        handleChange,
        clearValues,
        createCourse,
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
