import Wrapper from "../assets/wrappers/Lesson";

import HistoryIcon from "@mui/icons-material/History";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppContext } from "../context/appContext";

import moment from "moment";
import "moment/locale/pl";
import ClassesData from "../assets/wrappers/ClassesData";
import { AccessTimeFilledIcon, ArrowForwardIcon } from ".";

export default function LessonsHistory() {
  const { lastLessons } = useAppContext();

  return (
    <Wrapper>
      <h2>
        <span>
          <HistoryIcon sx={{ height: "50px" }} />
        </span>
        Historia zajęć
      </h2>
      <div className="rounded-xl">
        {lastLessons.map((lesson) => (
          <Accordion key={lesson.date}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {moment(lesson.date).format("dddd")}
                <span className="text-yellow mx-2">|</span>
                {moment(lesson.date).format("L")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ClassesData>
                <AccessTimeFilledIcon color="primary" />
                <div>
                  {moment(lesson.date).subtract(1, "hours").format("LT")}
                </div>
              </ClassesData>
              <Typography>
                <ClassesData>
                  <ArrowForwardIcon color="primary" />
                  <p>{lesson.subject}</p>
                </ClassesData>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Wrapper>
  );
}
