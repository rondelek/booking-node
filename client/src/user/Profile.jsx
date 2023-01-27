import { Box } from "@mui/material";
import { useAppContext } from "../context/appContext";
import NextLesson from "./NextLesson";

export default function Profile() {
  const { user } = useAppContext();

  return (
    <div className="py-8 mx-8">
      <NextLesson />
    </div>
  );
}
