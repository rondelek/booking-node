import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";

export default function MailIcons() {
  return (
    <div className="mail-icons">
      <IconButton color="primary" aria-label="add to shopping cart">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <PersonIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <StarIcon />
      </IconButton>
    </div>
  );
}
