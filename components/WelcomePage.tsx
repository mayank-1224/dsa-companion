import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Router from "next/router";
import TopNavBar from "../components/TopNavBar";
import {
  SYmainBox,
  SYinnerBox,
  SYtitleStack,
  SYalertText,
  SYtitleText,
  SYalertButton,
} from "../styles/StyledComponents/WelcomeNavBarsCSS";

const WelcomePage = () => {
  return (
    <SYmainBox>
      {/* <TopNavBar /> */}
      <SYinnerBox>
        <SYtitleStack>
          <SYtitleText
            variant="h2"
            sx={{
              color: "black",
              textShadow: "2px 1px 1px rgba(0,0,0,0.5)",
              fontSize: "4rem",
              "@media (max-width: 700px)": {
                fontSize: "2.8rem",
              },
            }}
          >
            Welcome to 'YOUR'
          </SYtitleText>
          <SYtitleText
            variant="h1"
            sx={{
              lineHeight: "0.8",
              fontSize: "18rem",
              textShadow: "5px 4px 5px rgba(0,0,0,0.5)",
              "@media (max-width: 700px)": {
                fontSize: "12rem",
              },
            }}
          >
            DSA
          </SYtitleText>
          <SYtitleText
            variant="h1"
            sx={{
              fontSize: "6.3rem",
              lineHeight: "0.8",
              textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
              "@media (max-width: 700px)": {
                fontSize: "4rem",
              },
            }}
          >
            COMPANION
          </SYtitleText>
        </SYtitleStack>
        <SYtitleStack>
          <SYalertButton
            variant="contained"
            onClick={() => Router.push("/SDEsheets")}
          >
            <SYalertText variant="h6">
              ALL SDE Sheets are now live. Go Check!
            </SYalertText>
          </SYalertButton>
          <SYalertButton
            variant="contained"
            onClick={() => Router.push("/ContestTracker")}
          >
            <SYalertText variant="h6">
              Contest Tracker is now live. Go Check!
            </SYalertText>
          </SYalertButton>
          <SYalertButton
            variant="contained"
            onClick={() => Router.push("/JobTracker")}
          >
            <SYalertText variant="h6">
              Job Tracker is now live. Go Check!
            </SYalertText>
          </SYalertButton>
        </SYtitleStack>
      </SYinnerBox>
    </SYmainBox>
  );
};

export default WelcomePage;
