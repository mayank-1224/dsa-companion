import type { NextPage } from "next";
import TopNavBar from "../components/TopNavBar";
import AvailableCards from "../components/AvailableCards";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box>
      <TopNavBar />
      <Box
        sx={{
          //border: "1px solid red",
          margin: "2vh 20vw",
        }}
      >
        <AvailableCards />
      </Box>
    </Box>
  );
};

export default Home;
