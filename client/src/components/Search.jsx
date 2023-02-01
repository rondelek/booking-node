import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Szukaj wiadomości"
        inputProps={{ "aria-label": "Szukaj wiadomości" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
}
