import { Alert, Snackbar } from "@mui/material";

import { useAppContext } from "../context/appContext";

export default function AlertSnackbar() {
  const { showAlert, alertType, alertText } = useAppContext();

  return (
    <div className="mt-12">
      <Snackbar
        open={showAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity={alertType} sx={{ width: "100%" }}>
          {alertText}
        </Alert>
      </Snackbar>
    </div>
  );
}
