import React, { useReducer, useContext, useEffect, useState } from "react";
import reducer from "./reducer";
import axios from "axios";
import moment from "moment";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  alertType: "",
  alertText: "",
  showAlert: false,
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  name: "",
  level: "",
  type: "",
  groupLimit: 0,
  price: 0,
  startsAt: "",
  newCourses: [],
  allStudents: [],
  updateStudentID: "",
  isPaid: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [lastLessons, setLastLessons] = useState(state.user?.lastLessons);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [editHomework, setEditHomework] = useState(false);
  const [editNextLesson, setEditNextLesson] = useState(false);
  const [editLesson, setEditLesson] = useState(false);
  const [isEdited, setIsEdited] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    setOpenDrawer(!openDrawer);
  };

  const toggleEditLesson = () => {
    setEditLesson(!editLesson);
  };

  const toggleNextLesson = () => {
    setEditNextLesson(!editNextLesson);
  };

  const handleEditHomework = () => {
    setIsEdited("homework");
    setEditTitle("Przydziel zadanie domowe");
    toggleEditLesson();
  };

  const handleEditNextLesson = () => {
    setIsEdited("nextLesson");
    setEditTitle("Zmień temat kolejnych zajęć");
    toggleEditLesson();
  };

  const handleEditNextLessonDate = () => {
    setIsEdited("nextLessonDate");
    setEditTitle("Zmień datę kolejnych zajęć");
    toggleEditLesson();
  };

  const handleEditNextLessonTime = () => {
    setIsEdited("nextLessonTime");
    setEditTitle("Zmień godzinę kolejnych zajęć");
    toggleEditLesson();
  };

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
    console.log(currentUser);
    dispatch({ type: "UPDATE_USER_BEGIN" });
    try {
      const { data } = await authFetch.patch("/auth", currentUser);
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

  const setUpdateStudent = async (id, isPaid) => {
    dispatch({ type: "SET_UPDATE_STUDENT", payload: { id, isPaid } });
  };

  const updateStudent = async () => {
    dispatch({ type: "UPDATE_STUDENT_BEGIN" });
    try {
      const { isPaid } = state;
      await authFetch.patch(`admin/students/${state.updateStudentID}`, {
        isPaid,
      });
      dispatch({ type: "UPDATE_STUDENT_SUCCESS" });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: "UPDATE_STUDENT_ERROR",
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
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

  const getNewCourses = async () => {
    dispatch({ type: "GET_NEW_COURSES_BEGIN" });
    try {
      const { data } = await authFetch("/courses");
      const { newCourses } = data;
      dispatch({
        type: "GET_NEW_COURSES_SUCCESS",
        payload: {
          newCourses,
        },
      });
    } catch (error) {
      // logoutUser();
    }
  };

  const getAllStudents = async () => {
    dispatch({ type: "GET_ALL_STUDENTS_BEGIN" });
    try {
      const { data } = await authFetch("/admin");
      const { allStudents } = data;
      dispatch({
        type: "GET_ALL_STUDENTS_SUCCESS",
        payload: {
          allStudents,
        },
      });
    } catch (error) {
      // logoutUser();
    }
  };

  const sendNewLesson = async (newLesson) => {
    dispatch({ type: "SET_NEW_DATE_BEGIN" });
    dispatch({ type: "SET_NEW_DATE_SUCCESS" });
    console.log(
      "wysłano wiadomość, nowa data: ",
      moment(newLesson.date).format("LLL"),
      " wiadomość: ",
      newLesson.msg
    );
    clearAlert();
  };

  useEffect(() => {
    getAllStudents();
  }, []);

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
        getNewCourses,
        getAllStudents,
        setUpdateStudent,
        updateStudent,
        openDrawer,
        setOpenDrawer,
        toggleDrawer,
        editHomework,
        setEditHomework,
        toggleNextLesson,
        editNextLesson,
        setEditNextLesson,
        editLesson,
        setEditLesson,
        toggleEditLesson,
        isEdited,
        setIsEdited,
        handleEditHomework,
        handleEditNextLesson,
        handleEditNextLessonDate,
        handleEditNextLessonTime,
        editTitle,
        setEditLesson,
        lastLessons,
        setLastLessons,
        sendNewLesson,
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
