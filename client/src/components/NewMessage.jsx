import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import { MenuItem, TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
import ClickIcon from "./ClickIcon";
import { SendIcon } from "../user";
import { useAppContext } from "../context/appContext";
import { useState } from "react";

export default function NewMessage({ open, setOpen }) {
  const [fullWidth, setFullWidth] = useState(false);

  const {
    user,
    newMessage,
    setNewMessage,
    allStudents,
    messageParticipantID,
    setMessageParticipantID,
    sendMessage,
  } = useAppContext();

  const otherStudents = allStudents.filter(
    (student) => student._id !== user._id
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendNewMessage = () => {
    const message = newMessage;
    const receiverID = messageParticipantID;
    sendMessage({ message, receiverID });
    setNewMessage("");
    handleClose();
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(!fullWidth);
  };

  const handleMessageContent = (e) => {
    setNewMessage(e.target.value);
  };

  const handleMessageParticipantID = (e) => {
    setMessageParticipantID(e.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        fullWidth={fullWidth}
        maxWidth={fullWidth ? "lg" : "sm"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            minHeight: `${fullWidth && "100vh"}`,
            padding: "12px",
          },
        }}
      >
        <Box sx={{ marginLeft: "auto" }}>
          {fullWidth ? (
            <ClickIcon
              onClick={handleFullWidthChange}
              icon={<CloseFullscreenIcon sx={{ width: "15px" }} />}
            />
          ) : (
            <ClickIcon
              onClick={handleFullWidthChange}
              icon={<OpenInFullIcon sx={{ width: "15px" }} />}
            />
          )}
          <ClickIcon
            icon={<CloseIcon onClick={handleClose} sx={{ width: "15px" }} />}
          />
        </Box>
        <DialogContent sx={{ padding: "0 24px" }}>
          <div className="space-y-2">
            <TextField
              select
              label="Wyślij wiadomość do:"
              variant="standard"
              onChange={handleMessageParticipantID}
              fullWidth
            >
              {otherStudents.map((student) => (
                <MenuItem key={student.name} value={student._id}>
                  {student.name}
                </MenuItem>
              ))}
            </TextField>
            <TextareaAutosize
              minRows={10}
              style={{
                width: "100%",
                lineHeight: "1.125rem",
                outline: "none",
                padding: "10px",
              }}
              value={newMessage}
              onChange={handleMessageContent}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <ClickIcon icon={<AttachFileIcon />} />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSendNewMessage}
          >
            wyślij
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
