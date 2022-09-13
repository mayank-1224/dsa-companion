import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Router from "next/router";

const WelcomePage = () => {
  return (
    <Box
      sx={{
        // border: "1px solid blue",
        height: "92%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          // border: "1px solid blue",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kollektif",
              fontSize: "4rem",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "black",
              textShadow: "3px 2px 3px rgba(0,0,0,0.5)",
            }}
          >
            Welcome to 'YOUR'
          </Typography>
          <Typography
            variant="h1"
            sx={{
              // border: "1px solid black",
              lineHeight: "0.8",
              fontFamily: "Kollektif",
              fontSize: "18rem",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "white",
              textShadow: "5px 4px 5px rgba(0,0,0,0.5)",
            }}
          >
            DSA
          </Typography>
          <Typography
            variant="h1"
            sx={{
              // border: "1px solid black",
              fontFamily: "Kollektif",
              fontSize: "6.3rem",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "white",
              lineHeight: "0.8",
              textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
            }}
          >
            COMPANION
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            height: "5rem",
            padding: "0 1rem",
            borderTopLeftRadius: "3rem",
            borderBottomLeftRadius: "3rem",
            borderBottomRightRadius: "17rem",
            borderTopRightRadius: "17rem",
            boxShadow: "7px 8px 15px -5px rgba(0,0,0,0.65)",
            ":hover": {
              backgroundColor: "black",
            },
          }}
          onClick={() => Router.push("/SDEsheets")}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Kollektif",
              fontSize: "1.5rem",
              fontWeight: "800",
              letterSpacing: "1px",
              color: "#f84f39",
              lineHeight: "0.8",
              textShadow: "2px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            SDE Sheets are now live. Go Check!
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
