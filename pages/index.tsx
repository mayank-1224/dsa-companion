import type { NextPage } from "next";
import TopNavBar from "../components/TopNavBar";
import AvailableCards from "../components/AvailableCards";
import WelcomePage from "../components/WelcomePage";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f84f39",
        width: "100vw",
        height: "100vh",
        padding: "0 20vw",
      }}
    >
      <TopNavBar />
      <WelcomePage />
      <AvailableCards />
    </Box>
  );
};

export default Home;
