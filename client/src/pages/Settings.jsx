import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAppContext } from "../context/appContext";
import { useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";

export default function Settings() {
  const {
    user,
    showAlert,
    alertType,
    alertText,
    clearAlert,
    displayAlertError,
    updateUser,
    isLoading,
  } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName) {
      displayAlertError();
      return;
    }

    updateUser({ name, email, lastName });
    clearAlert();
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Snackbar
        open={showAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {showAlert && (
          <Alert severity={alertType} sx={{ width: "100%" }}>
            {alertText}
          </Alert>
        )}
      </Snackbar>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          value={name}
          name="name"
          type="text"
          onChange={changeName}
          id="input-with-sx"
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          value={email}
          name="email"
          type="email"
          onChange={changeEmail}
          id="input-with-sx"
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          value={lastName}
          name="lastName"
          type="text"
          onChange={changeLastName}
          id="input-with-sx"
          variant="standard"
        />
      </Box>
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        disabled={isLoading}
      >
        {isLoading ? "Wait" : "Save"}
      </Button>
    </Box>
  );
}
