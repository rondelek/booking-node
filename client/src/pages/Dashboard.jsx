import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Searchbox } from "../components";

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

  return (
    <div>
      <Searchbox />
    </div>
  );
}
