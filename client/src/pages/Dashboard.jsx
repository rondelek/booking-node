import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Hero } from "../components";
import Offer from "../components/Offer";

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
      <Hero />
      <Offer />
    </div>
  );
}
