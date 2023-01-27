import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
// ******* THEME ********

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8c36f",
    },
    secondary: {
      main: "#676C7B",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: "600",
          background: "primary",
          "&:hover": {
            background: "#f5ba5b",
            color: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#676C7B",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#676C7B",
            },
          },
        },
      },
    },
  },
});

// ******* BUTTONS ********

const GreenButton = withStyles({
  root: {
    backgroundColor: "green",
    color: "#fff",
    width: "120px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "green",
    },
  },
})(Button);

const RedButton = withStyles({
  root: {
    backgroundColor: "red",
    color: "#fff",
    width: "120px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "red",
    },
  },
})(Button);

export { GreenButton, RedButton, theme };
