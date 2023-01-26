import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Alert, Button, Snackbar } from "@mui/material";
import { useAppContext } from "../context/appContext";

export default function CreateCourse() {
  const {
    name,
    level,
    type,
    groupLimit,
    price,
    startsAt,
    handleChange,
    clearValues,
    createCourse,
    isLoading,
    showAlert,
    alertType,
    alertText,
    displayAlertError,
    getNewCourses,
  } = useAppContext();

  const handleCourseInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !level || !type || !groupLimit || !price || !startsAt) {
      displayAlertError();
      return;
    }

    createCourse();

    // console.log(name, level);
  };

  return (
    <div>
      <h1>create course</h1>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <button onClick={getNewCourses}>fdfd</button>
        <Snackbar
          open={showAlert}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert severity={alertType} sx={{ width: "100%" }}>
            {alertText}
          </Alert>
        </Snackbar>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="nazwa kursu"
            value={name}
            name="name"
            type="text"
            onChange={handleCourseInput}
            id="input-with-sx"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="poziom"
            value={level}
            name="level"
            type="text"
            onChange={handleCourseInput}
            id="input-with-sx"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="typ"
            value={type}
            name="type"
            type="text"
            onChange={handleCourseInput}
            id="input-with-sx"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="limit grupy"
            value={groupLimit}
            name="groupLimit"
            type="number"
            onChange={handleCourseInput}
            id="input-with-sx"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="cena"
            value={price}
            name="price"
            type="number"
            onChange={handleCourseInput}
            id="input-with-sx"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="początek kursu"
            value={startsAt}
            name="startsAt"
            type="date"
            onChange={handleCourseInput}
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
          SAVE
        </Button>
      </Box>
    </div>
  );
}
