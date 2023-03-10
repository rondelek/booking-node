import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Alert, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AlertSnackbar from "../components/Alert";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

export default function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const {
    user,
    displayAlertError,
    showAlert,
    alertType,
    alertText,
    isLoading,
    setupUser,
  } = useAppContext();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlertError();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      setupUser({
        currentUser,
        endpoint: "login",
        alertText: "Login successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endpoint: "register",
        alertText: "User registered! Redirecting...",
      });
    }

    console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random/?language)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="mb-2">
            <SpeakerNotesIcon color="primary" sx={{ width: "4rem" }} />
          </Box>
          <Typography component="h1" variant="h5">
            {values.isMember ? "Sign In" : "Sign Up"}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <AlertSnackbar />
            {!values.isMember && (
              <TextField
                value={values.name}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            )}
            <TextField
              value={values.email}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={values.password}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              {values.isMember ? "Sign In" : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="secondary">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="secondary">
                  {values.isMember
                    ? "Don't have an account?"
                    : "Already a member?"}

                  <span className="font-bold" onClick={toggleMember}>
                    {" "}
                    {values.isMember ? "Sign Up" : "Sign In"}
                  </span>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
