import online from "../assets/images/online.svg";
import blob from "../assets/images/blob.svg";
import blob3 from "../assets/images/blob3.svg";

import { TodayIcon } from "./index";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { GreenButton, RedButton } from "../styles/muiStyles";
import { useAppContext } from "../context/appContext";
import NextLessonBox from "./NextLessonBox";
import Wrapper from "../assets/wrappers/Lesson";

export default function NextLesson() {
  const { user, updateUser, lastLessons, setLastLessons } = useAppContext();

  const { name, email, nextLesson, nextLesson2 } = user;

  const handleUpdateLesson = (e) => {
    e.preventDefault();
    setLastLessons([...lastLessons, nextLesson]);
    updateUser({ name, email, nextLesson: nextLesson2, lastLessons });
  };

  return (
    <Wrapper>
      <h1>
        <span>
          <TodayIcon sx={{ height: "40px" }} />
        </span>
        Następne zajęcia
      </h1>
      <Grid container margin={2} width="auto">
        <img
          src={blob}
          className="-z-10 overflow-hidden absolute max-w-md opacity-30 -left-64 -translate-x-24 top-0"
          alt=""
        />
        <img
          src={blob3}
          className="absolute hidden md:block opacity-40 w-[450px] top-64 translate-y-12 -right-36"
          alt=""
        />
        <Grid item xs={12} sm={6} sx={{ marginTop: 2, alignSelf: "center" }}>
          <NextLessonBox />
          <div className="flex-row flex-wrap justify-center mb-8 mt-2 gap-2">
            <Button onClick={handleUpdateLesson}>update</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              position: "relative",
              marginBottom: "2rem",
              overflow: "hidden",
            }}
          >
            <img src={online} className="max-w-[300px]" alt="" />
            <img
              src={blob}
              className="-z-10 overflow-hidden absolute max-w-md opacity-20 top-0 left-12"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
