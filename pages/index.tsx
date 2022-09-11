import type { NextPage } from "next";
import TopNavBar from "../components/TopNavBar";
import AvailableCards from "../components/AvailableCards";
import WelcomePage from "../components/WelcomePage";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
        }}
      >
        <TopNavBar />
        <Box
          sx={{
            width: "100%",
            height: "92vh",
          }}
        >
          <WelcomePage />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
