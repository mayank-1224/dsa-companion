import type { NextPage } from "next";
import TopNavBar from "../components/TopNavBar";
import WelcomePage from "../components/WelcomePage";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box>
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
