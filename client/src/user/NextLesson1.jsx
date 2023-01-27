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

export default function NextLesson1() {
  const { user } = useAppContext();

  return (
    <div className="flex-column-wrap-center">
      <ClassesData>
        <CalendarTodayIcon color="primary" />
        <p>
          {moment(user.nextLessonDate).format("dddd")}
          <span className="text-yellow mx-2">|</span>
          {moment(user.nextLessonDate).format("L")}
        </p>
      </ClassesData>
      <ClassesData>
        <AccessTimeFilledIcon color="primary" />
        <p>{moment(user.nextLessonDate).subtract(1, "hours").format("LT")}</p>
      </ClassesData>
      <ClassesData>
        <HomeIcon color="primary" />
        <p>{user.homework}</p>
      </ClassesData>
      <ClassesData>
        <ArrowForwardIcon color="primary" />
        <p>{user.nextLessonDescription}</p>
      </ClassesData>
    </div>
  );
}
