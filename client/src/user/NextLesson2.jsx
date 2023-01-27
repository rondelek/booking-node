import { useAppContext } from "../context/appContext";

import moment from "moment";
import "moment/locale/pl";

import ClassesData from "../assets/wrappers/ClassesData";
import { FitnessCenterIcon, ReportIcon } from ".";

export default function NextLesson2() {
  const { user } = useAppContext();

  return (
    <div className="flex-column-wrap-center">
      <ClassesData>
        <ReportIcon color="primary" />
        <p>{user.nextLessonDescription}</p>
      </ClassesData>
      <ClassesData>
        <FitnessCenterIcon color="primary" />
        <p>{user.nextLessonDescription}</p>
      </ClassesData>
      <ClassesData>
        <FitnessCenterIcon color="primary" />
        <p>{user.nextLessonDescription}</p>
      </ClassesData>
      <ClassesData>
        <FitnessCenterIcon color="primary" />
        <p>{user.nextLessonDescription}</p>
      </ClassesData>
    </div>
  );
}
