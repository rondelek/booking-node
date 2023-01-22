import { Button } from "@mui/material";
import notfound from "../assets/images/notfound.svg";

export default function Error() {
  return (
    <div className="flex-column mt-8 space-y-4 md:space-y-6">
      <img src={notfound} className="not-found-img" alt="not found" />
      <h2>Oops!</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Button variant="contained">Back home</Button>
    </div>
  );
}
