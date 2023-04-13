import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextareaAutosize,
  TextField,
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
      main: "#fdfdfd",
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
            background: "#feb538",
            color: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // padding: "5px",
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

const BlackRoundedButton = styled(Button)({
  position: "relative",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "2.6vh",
  borderRadius: "50px",
  padding: ".5rem 2.5rem .5rem 2rem",
  cursor: "pointer",
  "& .MuiButton-endIcon": {
    color: "#feb538",
  },
  "&:hover": {
    backgroundColor: "#feb538",
    color: "#000",
    cursor: "pointer",
    "& .MuiButton-endIcon": {
      color: "#000",
    },
  },
});

const BlackRoundedButtonTextYellow = styled(Button)({
  position: "relative",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "2.6vh",
  borderRadius: "50px",
  padding: ".5rem 2.5rem",
  cursor: "pointer",
  "& .MuiButton-endIcon": {
    color: "#feb538",
  },
  "&:hover": {
    backgroundColor: "#000",
    color: "#feb538",
    cursor: "pointer",
    "& .MuiButton-endIcon": {
      color: "#000",
    },
  },
});

const YellowRoundedButton = styled(Button)({
  backgroundColor: "#feb538",
  color: "#fff",
  fontSize: "2.6vh",
  borderRadius: "50px",
  padding: ".5rem 2rem",
  "&:hover": {
    // backgroundColor: "#000",
    color: "#000",
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

export {
  GreenButton,
  RedButton,
  BlackRoundedButton,
  BlackRoundedButtonTextYellow,
  YellowRoundedButton,
  TextAreaStyle,
  theme,
};
