import Wrapper from "../assets/wrappers/Lesson";
import NextLesson1 from "./NextLesson1";
import ClassIcon from "@mui/icons-material/Class";
import lessonLast from "../assets/images/lessonLast.svg";
import LastLesson1 from "./LastLesson1";
import { Grid } from "@mui/material";

export default function LastLesson() {
  return (
    <Wrapper>
      <h2>
        <span>
          <ClassIcon sx={{ height: "50px" }} />
        </span>
        Ostatnie zajęcia
      </h2>
      <Grid container margin={2} columnSpacing={2} width="auto">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ marginTop: 2, marginBottom: 3, alignSelf: "center" }}
        >
          <LastLesson1 />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            marginTop: 2,
            marginBottom: 3,
            alignSelf: "center",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <img src={lessonLast} className="max-w-[200px]" alt="" />
        </Grid>
      </Grid>
    </Wrapper>
  );
}
