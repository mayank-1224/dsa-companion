import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const WelcomePage = () => {
  return (
    <Box
      sx={{
        // border: "1px solid blue",
        width: "100%",
        height: "92%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "10%",
      }}
    >
      <Box
        sx={{
          //   border: "1px solid blue",
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
            WebkitBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
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
              lineHeight: "0.8",
            }}
          >
            SDE Sheets are live now. Go Check!
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
