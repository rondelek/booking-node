import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Error, Landing, Register, Settings } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Footer, Navbar } from "./components";
import SharedLayout from "./pages/SharedLayout";
import Profile from "./user/Profile";
import CreateCourse from "./admin/CreateCourse";

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
          fontWeight: "bold",
          background: "primary",
          "&:hover": {
            background: "#f5ba5b",
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
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
