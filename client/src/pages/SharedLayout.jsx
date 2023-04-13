import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function SharedLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}
