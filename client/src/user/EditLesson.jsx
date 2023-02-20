import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { TextAreaStyle } from "../styles/muiStyles";

import {
  Link,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SendIcon,
} from ".";

import moment from "moment";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AlertSnackbar from "../components/Alert";

export default function EditLesson() {
  const {
    user,
    editLesson,
    toggleEditLesson,
    isEdited,
    editTitle,
    sendNewLesson,
  } = useAppContext();

  const [homework, setHomework] = useState(user.nextLesson.homework);
  const [nextLessonSubject, setNextLessonSubject] = useState(
    user.nextLesson.subject
  );
  const [nextLessonDate, setNextLessonDate] = useState(user.nextLesson.date);
  const [nextLessonTime, setNextLessonTime] = useState(
    user.nextLesson.date.split("T")[1]
  );

  const [newDate, setNewDate] = useState(nextLessonDate.replace("Z", ""));
  const [newLesson, setNewLesson] = useState({
    date: nextLessonDate.replace("Z", ""),
    msg: "",
  });

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

    // updateUser({ nextLesson, name, email });
    toggleEditLesson();
  };

  const handleSendNewLesson = () => {
    sendNewLesson(newLesson);
    toggleEditLesson();
  };

  const handleNewDate = (e) => {
    setNewLesson({ ...newLesson, date: e.target.value });
  };

  const handleMessageToTutor = (e) => {
    setNewLesson({ ...newLesson, msg: e.target.value });
  };

  return (
    <div>
      <AlertSnackbar />
      <Dialog open={editLesson} onClose={toggleEditLesson}>
        <DialogTitle>{editTitle}</DialogTitle>
        <DialogContent>
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
            <div className="flex flex-col gap-4">
              <p>Zaproponuj termin przełożonych zajęć:</p>
              {/* <TextField
                id="date"
                type="date"
                defaultValue={nextLessonDate}
                onChange={handleNextLessonDateChange}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
              <TextField
                id="datetime-local"
                // label="Next appointment"
                onChange={handleNewDate}
                type="datetime-local"
                value={newLesson.date}
                // defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Accordion elevation={0} disableGutters={true}>
                <AccordionSummary
                  disableGutters={true}
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    lub <Link>napisz do lektora</Link>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextAreaStyle
                    autoFocus
                    margin="dense"
                    id="name"
                    type="text"
                    variant="outlined"
                    value={newLesson.msg}
                    minRows={3}
                    onChange={handleMessageToTutor}
                  />
                </AccordionDetails>
              </Accordion>
            </div>
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
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSendNewLesson}
          >
            wyślij
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
