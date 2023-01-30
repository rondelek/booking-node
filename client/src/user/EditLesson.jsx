import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { TextAreaStyle } from "../styles/muiStyles";

export default function EditLesson() {
  const {
    user,
    editLesson,
    toggleEditLesson,
    updateUser,
    isEdited,
    editTitle,
  } = useAppContext();

  const [homework, setHomework] = useState(user.nextLesson.homework);
  const [nextLessonSubject, setNextLessonSubject] = useState(
    user.nextLesson.subject
  );
  const [nextLessonDate, setNextLessonDate] = useState(user.nextLesson.date);
  const [nextLessonTime, setNextLessonTime] = useState(
    user.nextLesson.date.split("T")[1]
  );

  const [nextLesson, setNextLesson] = useState(user.nextLesson);

  useEffect(() => {
    setNextLesson({
      date: nextLessonDate,
      homework: homework,
      subject: nextLessonSubject,
    });
  }, [homework, nextLessonSubject, nextLessonDate, nextLessonTime]);

  const name = user.name;
  const email = user.email;
  const nextLessonHour = user.nextLesson.date.split("T")[1];

  const handleHomeworkChange = (e) => {
    setHomework(e.target.value);
  };

  const handleNextLessonSubjectChange = (e) => {
    setNextLessonSubject(e.target.value);
  };

  const handleNextLessonDateChange = (e) => {
    setNextLessonDate(`${e.target.value}T${nextLessonHour}`);
  };

  const handleNextLessonTimeChange = (e) => {
    setNextLessonDate(
      `${nextLessonDate.split("T")[0]}T${e.target.value}:00.000Z`
    );
  };

  const handleUpdateLesson = (e) => {
    e.preventDefault();

    updateUser({ nextLesson, name, email });
    toggleEditLesson();
  };

  return (
    <div>
      <Dialog open={editLesson} onClose={toggleEditLesson}>
        <DialogTitle>{editTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          {isEdited === "homework" && (
            <TextAreaStyle
              autoFocus
              margin="dense"
              id="name"
              type="text"
              variant="outlined"
              value={homework}
              onChange={handleHomeworkChange}
            />
          )}
          {isEdited === "nextLesson" && (
            <TextAreaStyle
              autoFocus
              margin="dense"
              id="name"
              type="text"
              variant="outlined"
              value={nextLessonSubject}
              onChange={handleNextLessonSubjectChange}
            />
          )}
          {isEdited === "nextLessonDate" && (
            <TextField
              id="date"
              type="date"
              defaultValue={nextLessonDate}
              onChange={handleNextLessonDateChange}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
          {isEdited === "nextLessonTime" && (
            <TextField
              id="time"
              type="time"
              defaultValue={nextLessonTime}
              onChange={handleNextLessonTimeChange}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: ".5rem",
          }}
        >
          <Button variant="contained" onClick={handleUpdateLesson}>
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
