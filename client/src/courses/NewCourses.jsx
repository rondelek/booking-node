import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import CourseCard from "./CourseCard";

export default function NewCourses() {
  const { getNewCourses, newCourses } = useAppContext();

  useEffect(() => {
    getNewCourses();
  }, []);

  if (newCourses.length === 0) {
    return <h2>Brak nowych kursów.</h2>;
  }

  return (
    <div className="flex justify-center flex-wrap m-8 gap-6">
      {newCourses.map((course) => (
        <CourseCard course={course} />
      ))}
    </div>
  );
}
