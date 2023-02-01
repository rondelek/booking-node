import * as React from "react";
import Search from "../../components/Search";

import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import { IconButton } from "@mui/material";
import Toggle from "../../components/Toggle";
import Inbox from "../../components/Inbox";
import Message from "../../components/Message";
import NewMessage from "../../components/NewMessage";

export default function Test() {
  const [open, setOpen] = React.useState(false);

  const writeNewMsg = () => {
    setOpen(true);
  };
  return (
    <div className="main-area">
      <div className="header">
        <Search />
        <Toggle />
        <IconButton
          color="primary"
          onClick={writeNewMsg}
          aria-label="add to shopping cart"
        >
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="main-container">
        <Inbox />
        <Message />
      </div>
      <NewMessage open={open} setOpen={setOpen} />
    </div>
  );
}
