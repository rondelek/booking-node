import online from "../assets/images/online.svg";
import onlineTest from "../assets/images/onlineTest.svg";

import { TodayIcon } from "./index";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { GreenButton, RedButton } from "../styles/muiStyles";
import { useAppContext } from "../context/appContext";
import NextLesson1 from "./NextLesson1";
import Wrapper from "../assets/wrappers/Lesson";

export default function NextLesson() {
  const { user, updateUser, lastLessons, setLastLessons } = useAppContext();

  const { name, email, nextLesson, nextLesson2 } = user;

  console.log(nextLesson2);

  const handleUpdateLesson = (e) => {
    e.preventDefault();
    setLastLessons([...lastLessons, nextLesson]);
    updateUser({ name, email, nextLesson: nextLesson2, lastLessons });
  };

  return (
    <Wrapper>
      <h1>
        <span>
          <TodayIcon sx={{ height: "50px" }} />
        </span>
        Następne zajęcia
      </h1>
      <Grid container margin={2} width="auto">
        <Grid item xs={12} sm={6} sx={{ marginTop: 2, alignSelf: "center" }}>
          <NextLesson1 />
          <div className="flex-row flex-wrap justify-center mb-8 mt-2 gap-2">
            <GreenButton variant="contained">przełóż</GreenButton>
            <RedButton variant="contained">odwołaj</RedButton>
            <Button onClick={handleUpdateLesson}>update</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ marginBottom: "2rem" }}>
            <img src={online} className="md:max-w-[480px] " alt="" />
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
