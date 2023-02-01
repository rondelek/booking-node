import { useAppContext } from "../context/appContext";

import moment from "moment";
import "moment/locale/pl";

import {
  AccessTimeFilledIcon,
  ArrowForwardIcon,
  CalendarTodayIcon,
  HomeIcon,
} from ".";
import ClassesData from "../assets/wrappers/ClassesData";
import { Link } from "@mui/material";

export default function NextLessonBox() {
  const {
    user,
    handleEditHomework,
    handleEditNextLesson,
    handleEditNextLessonDate,
    handleEditNextLessonTime,
  } = useAppContext();

  const { nextLesson, isAdmin } = user;

  return (
    <div className="flex flex-col">
      <ClassesData>
        <CalendarTodayIcon color="primary" />
        <p>
          {moment(nextLesson.date).format("dddd")}
          <span className="text-yellow mx-2">|</span>
          {moment(nextLesson.date).format("L")}
        </p>
        <Link href="#" variant="body2" onClick={handleEditNextLessonDate}>
          zmień
        </Link>
      </ClassesData>
      <ClassesData>
        <AccessTimeFilledIcon color="primary" />
        <p>{moment(nextLesson.date).subtract(1, "hours").format("LT")}</p>
        <Link href="#" variant="body2" onClick={handleEditNextLessonTime}>
          zmień
        </Link>
      </ClassesData>
      <ClassesData>
        <HomeIcon color="primary" />
        <p>{nextLesson.homework}</p>
        {isAdmin && (
          <Link href="#" variant="body2" onClick={handleEditHomework}>
            zmień
          </Link>
        )}
      </ClassesData>
      <ClassesData>
        <ArrowForwardIcon color="primary" />
        <p>{nextLesson.subject}</p>
        {isAdmin && (
          <Link href="#" variant="body2" onClick={handleEditNextLesson}>
            zmień
          </Link>
        )}
      </ClassesData>
    </div>
  );
}
