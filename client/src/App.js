import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Error, Landing, Register, Settings } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/SharedLayout";
import Profile from "./user/Profile";
import NewCourses from "./courses/NewCourses";
import { Students, CreateCourse } from "./admin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8c36f",
    },
    secondary: {
      main: "#676C7B",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: "600",
          background: "primary",
          "&:hover": {
            background: "#f5ba5b",
            color: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#676C7B",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#676C7B",
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="user/settings" element={<Settings />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="admin/create-course" element={<CreateCourse />} />
            <Route path="admin/students" element={<Students />} />
            <Route path="courses/new-courses" element={<NewCourses />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
