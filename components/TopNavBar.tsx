import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Kollektif from "../public/fonts/Kollektif.ttf";
import Router from "next/router";

const TopNavBar = () => {
  require("typeface-poppins");
  return (
    <Box
      sx={{
        // border: "1px solid black",
        width: "100%",
        height: "8%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        }}
      >
        DSA Companion
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          borderRadius: "3rem",
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
