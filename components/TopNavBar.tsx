import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Router from "next/router";

const TopNavBar = () => {
  require("typeface-poppins");
  return (
    <Box
      sx={{
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "0.7rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Kollektif",
          fontSize: "3.5rem",
          fontWeight: "800",
          letterSpacing: "-3px",
          color: "white",
          textShadow: "4px 3px 4px rgba(0,0,0,0.5)",

          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => {
          Router.push("/");
        }}
      >
        DSA Companion
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          borderRadius: "3rem",
          boxShadow: "7px 8px 15px -5px rgba(0,0,0,0.65)",
          ":hover": {
            backgroundColor: "black",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Kollektif",
            fontSize: "1.5rem",
            fontWeight: "800",
            letterSpacing: "1px",
            color: "#f84f39",
          }}
        >
          Log In
        </Typography>
      </Button>
    </Box>
  );
};

export default TopNavBar;
