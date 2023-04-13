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
import Messages from "./user/messages/Messages";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="user/settings" element={<Settings />} />
            <Route path="about-us" element={<Courses />} />
            {/* <Route path="pricing" element={<Pricing />} /> */}
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/messages" element={<Messages />} />
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
