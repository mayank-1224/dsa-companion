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
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            // border: "1px solid blue",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kollektif",
              fontSize: "3vw",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "black",
            }}
          >
            Welcome to 'YOUR'
          </Typography>
          <Typography
            variant="h1"
            sx={{
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
        <Box
          sx={{
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
                textShadow: "1px 1px 1px rgba(0,0,0,0.7)",
              }}
            >
              SDE Sheets are now live. Go Check!
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              height: "5rem",
              padding: "0 1rem",
              marginTop: "1rem",
              borderTopLeftRadius: "3rem",
              borderBottomLeftRadius: "3rem",
              borderBottomRightRadius: "17rem",
              borderTopRightRadius: "17rem",
              boxShadow: "7px 8px 15px -5px rgba(0,0,0,0.65)",
              ":hover": {
                backgroundColor: "black",
              },
            }}
            onClick={() => Router.push("/ContestTracker")}
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
                textShadow: "1px 1px 1px rgba(0,0,0,0.7)",
              }}
            >
              Contest Tracker is now live. Go Check!
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomePage;
