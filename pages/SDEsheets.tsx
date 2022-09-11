import AvailableCards from "../components/AvailableCards";
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";

const SDEsheets = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
        }}
      >
        <TopNavBar />
        <AvailableCards />
      </Box>
    </Box>
  );
};

export default SDEsheets;
