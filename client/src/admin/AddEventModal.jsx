import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function AddEventModal({ isOpen, setIsOpen, newEvent }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Nowa lekcja"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="name"
            type="text"
            label="Zajęcia"
            // value={newEvent.title}
            // onChange={handleHomeworkChange}
          />
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <TextField
              autoFocus
              margin="dense"
              id="datetime-local"
              type="datetime-local"
            />
            <span> - </span>
            <TextField
              autoFocus
              margin="dense"
              id="datetime-local"
              type="datetime-local"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
