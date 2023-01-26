import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
