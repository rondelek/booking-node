import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import Wrapper from "../assets/wrappers/Navbar";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

export default function Navbar() {
  const { openDrawer, setOpenDrawer, toggleDrawer } = useAppContext();

  return (
    <Wrapper>
      <Bars3CenterLeftIcon
        onClick={toggleDrawer(openDrawer, true)}
        className="icon-click"
      />
      <Link to="/">
        <div className="flex items-center space-x-[6px]">
          <SpeakerNotesIcon color="primary" />
          <h2 className="text-2xl font-bold text-main-dark  -translate-y-[2px]">
            Sign.
          </h2>
        </div>
      </Link>
      <DropdownMenu />
    </Wrapper>
  );
}
