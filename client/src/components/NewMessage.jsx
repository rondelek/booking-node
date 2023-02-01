import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import {
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextareaAutosize,
} from "@mui/material";
import { Box } from "@mui/system";
import ClickIcon from "./ClickIcon";
import { TextAreaStyle } from "../styles/muiStyles";
import { SendIcon } from "../user";

export default function NewMessage({ open, setOpen }) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(!fullWidth);
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
            <FormControl fullWidth variant="standard">
              <Input
                id="component-simple"
                startAdornment={
                  <InputAdornment position="start">Od:</InputAdornment>
                }
                value="jan@gmail.com"
              />
            </FormControl>
            <FormControl fullWidth variant="standard">
              <Input
                id="component-simple"
                startAdornment={
                  <InputAdornment position="start">Do:</InputAdornment>
                }
                value="ewelina@gmail.com"
              />
            </FormControl>
            <FormControl fullWidth variant="standard">
              <Input
                id="component-simple"
                startAdornment={
                  <InputAdornment position="start">Temat:</InputAdornment>
                }
                value="Angielski"
              />
            </FormControl>
            <TextareaAutosize
              minRows={10}
              style={{
                width: "100%",
                lineHeight: "1.125rem",
                outline: "none",
                padding: "10px",
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <ClickIcon icon={<AttachFileIcon />} />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleClose}
          >
            wyślij
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
