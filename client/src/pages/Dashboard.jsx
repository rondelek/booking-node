import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Button from "@mui/material/Button";

export default function Dashboard() {
  const { user, token, logoutUser } = useAppContext();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(token);

  return (
    <div>
      <h1>hello</h1>
      {user && <Button onClick={logoutUser}>Log out</Button>}
    </div>
  );
}
