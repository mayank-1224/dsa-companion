import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EverythingDSA = () => {
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
            marginTop: "17rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Kollektif",
              fontSize: "10rem",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "white",
            }}
          >
            Arsh Goyal Sheet
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kollektif",
              fontSize: "6rem",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "black",
            }}
          >
            Coming Soon!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EverythingDSA;
