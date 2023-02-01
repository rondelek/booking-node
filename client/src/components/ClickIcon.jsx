import { IconButton } from "@mui/material";

export default function ClickIcon({ icon, onClick }) {
  return (
    <IconButton onClick={onClick} sx={{ marginLeft: "10px" }}>
      {icon}
    </IconButton>
  );
}
