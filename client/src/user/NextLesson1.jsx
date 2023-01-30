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
import { useState } from "react";

export default function NextLesson1() {
  const {
    user,
    handleEditHomework,
    handleEditNextLesson,
    handleEditNextLessonDate,
    handleEditNextLessonTime,
    lastLessons,
    setLastLessons,
    updateUser,
  } = useAppContext();

  const { name, email, nextLesson, nextLesson2 } = user;

  const [test, setTest] = useState(lastLessons);

  const today = new Date();
  const todayDate = moment().format();

  const test1 = { date: nextLesson.date, subject: nextLesson.subject };

  const handleUpdateLesson = (e) => {
    updateUser({ name, email, nextLesson: nextLesson2, lastLessons });
  };

  if (user.nextLesson.date < todayDate) {
    // setLastLessons([...lastLessons, nextLesson]);
    // handleUpdateLesson();
  }
  console.log(user);

  return (
    <div className="flex-column-wrap-center">
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
        <Link href="#" variant="body2" onClick={handleEditHomework}>
          zmień
        </Link>
      </ClassesData>
      <ClassesData>
        <ArrowForwardIcon color="primary" />
        <p>{nextLesson.subject}</p>
        <Link href="#" variant="body2" onClick={handleEditNextLesson}>
          zmień
        </Link>
      </ClassesData>
    </div>
  );
}
