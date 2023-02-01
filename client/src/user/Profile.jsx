import { Box, Grid } from "@mui/material";
import DrawerMenu from "../components/DrawerMenu";
import { useAppContext } from "../context/appContext";
import EditLesson from "./EditLesson";
import LastLesson from "./LastLesson";
import LessonsHistory from "./LessonsHistory";
import NextLesson from "./NextLesson";

export default function Profile() {
  return (
    <div className="p-8 md:mx-36 space-y-12">
      <NextLesson />
      <EditLesson />
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6} marginBottom="2rem">
          <Box>
            <LastLesson />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <LessonsHistory />
          </Box>
        </Grid>
      </Grid>
      <DrawerMenu />
    </div>
  );
}
