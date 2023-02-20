import Wrapper from "../../assets/wrappers/Messages";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Test from "./Test";

export default function Messages() {
  return (
    <Wrapper>
      <h1>Wiadomości</h1>
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{ height: "100%", display: "flex", justifyContent: "center" }}
          >
            <Test />
            {/* <img src={message} className="max-w-[350px] opacity-80" alt="" /> */}
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
