import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Error, Register, Settings } from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/SharedLayout";
import Profile from "./user/Profile";
import NewCourses from "./courses/NewCourses";
import { Students, CreateCourse } from "./admin";
import { theme } from "../src/styles/muiStyles";
import "moment/locale/pl";

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
