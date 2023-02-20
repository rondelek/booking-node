import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function MessageReply() {
  const [newReply, setNewReply] = useState("");

  const sendReply = () => {};

  const handleSendReply = () => {
    console.log(newReply);
    sendReply();
    setNewReply("");
  };

  const handleNewReply = (e) => {
    setNewReply(e.target.value);
  };

  return (
    <div className="mail-textarea">
      <TextField
        autoFocus
        id="name"
        type="text"
        variant="standard"
        value={newReply}
        onChange={handleNewReply}
        fullWidth
        multiline
        InputProps={{
          disableUnderline: true,
        }}
      />
      <div className="textarea-icons">
        <div className="attach">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-paperclip"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
        </div>
        <div className="send cursor-pointer" onClick={handleSendReply}>
          <SendIcon />
        </div>
      </div>
    </div>
  );
}
