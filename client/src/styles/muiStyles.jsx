import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { styled } from "@mui/system";
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
          padding: "5px",
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:last-of-type": {
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          marginLeft: 10,
        },
      },
    },
  },
});

// ******* BUTTONS ********

const GreenButton = styled(Button)({
  backgroundColor: "#C1E1C1",
  color: "#fff",
  width: "120px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#C1E1C1",
  },
});

const RedButton = styled(Button)({
  backgroundColor: "#ff6961",
  color: "#fff",
  width: "120px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#ff6961",
  },
});

// ******* TEXTAREA ********

const TextAreaStyle = styled(TextareaAutosize)({
  border: "2px solid #f8c46f",
  width: "100%",
  flexGrow: 1,
  boxSizing: "border-box",
  borderRadius: 3,
  backgroundColor: "#f8f8f8",
  resize: "none",
  padding: ".5rem",
});

export { GreenButton, RedButton, TextAreaStyle, theme };
