import Wrapper from "../assets/wrappers/Lesson";
import NextLesson1 from "./NextLessonBox";
import ClassIcon from "@mui/icons-material/Class";
import lessonLast from "../assets/images/lessonLast.svg";
import LastLessonBox from "./LastLessonBox";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import blob3 from "../assets/images/blob3.svg";

export default function LastLesson() {
  return (
    <Wrapper>
      <h2>
        <span>
          <ClassIcon sx={{ height: "40px" }} />
        </span>
        Ostatnie zajęcia
      </h2>
      <Grid container margin={2} width="auto">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            marginTop: 2,
            marginBottom: 3,
          }}
        >
          <LastLessonBox />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            marginTop: 2,
            marginBottom: 3,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Box display="relative">
            <img src={lessonLast} className="max-w-[200px]" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
