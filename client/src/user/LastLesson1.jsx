import { AccessTimeFilledIcon, ArrowForwardIcon, CalendarTodayIcon } from ".";
import ClassesData from "../assets/wrappers/ClassesData";
import { useAppContext } from "../context/appContext";

import moment from "moment";
import "moment/locale/pl";

export default function LastLesson1() {
  const { lastLessons } = useAppContext();

  return (
    <div className="flex-column-wrap-center">
      <ClassesData>
        <CalendarTodayIcon color="primary" />
        <p>
          {moment(lastLessons[lastLessons.length - 1].date).format("dddd")}
          <span className="text-yellow mx-2">|</span>
          {moment(lastLessons[lastLessons.length - 1].date).format("L")}
        </p>
      </ClassesData>
      <ClassesData>
        <AccessTimeFilledIcon color="primary" />
        <p>
          {moment(lastLessons[lastLessons.length - 1].date)
            .subtract(1, "hours")
            .format("LT")}
        </p>
      </ClassesData>
      <ClassesData>
        <ArrowForwardIcon color="primary" />
        <p>{lastLessons[lastLessons.length - 1].subject}</p>
      </ClassesData>
    </div>
  );
}
