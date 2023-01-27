import online from "../assets/images/online.svg";
import onlineTest from "../assets/images/onlineTest.svg";

import { TodayIcon } from "./index";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { GreenButton, RedButton } from "../styles/muiStyles";
import { useAppContext } from "../context/appContext";
import NextLesson1 from "./NextLesson1";
import NextLesson2 from "./NextLesson2";
import Wrapper from "../assets/wrappers/Lesson";

export default function NextLesson() {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <h1>
        <span>
          <TodayIcon sx={{ height: "50px" }} />
        </span>
        Następne zajęcia
      </h1>
      <Grid container margin={2} width="auto">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ marginTop: 2, alignSelf: "center" }}
        >
          <NextLesson1 />
          <div className="flex-row flex-wrap justify-center mb-8 mt-2 gap-2">
            <GreenButton variant="contained">przełóż</GreenButton>
            <RedButton variant="contained">odwołaj</RedButton>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ marginBottom: "2rem" }}>
            <img
              src={online}
              className="min-[470px]:max-w-[300px] min-[980]:w-full min-[980]:translate-x-5 "
              alt=""
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: { xs: "none", sm: "block", md: "none" } }}
        >
          <img src={onlineTest} className="max-w-[250px] ml-4" alt="" />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ marginTop: 2, marginBottom: 4, alignSelf: "center" }}
        >
          <NextLesson2 />
          <div className="flex justify-center mt-4">
            <Button variant="contained">ćwicz!</Button>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
