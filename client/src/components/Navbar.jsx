import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import Wrapper from "../assets/wrappers/Navbar";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Wrapper>
      <Bars3CenterLeftIcon className="icon-click" />
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
