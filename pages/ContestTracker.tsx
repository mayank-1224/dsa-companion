import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import date from "date-and-time";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import contestJSON from "../hooks/contestJSON.json";
import atcoder from "../public/icons/atcoder.png";
import codechef from "../public/icons/codechef.png";
import codeforces from "../public/icons/codeforces.png";
import codingNinjas from "../public/icons/codingNinja.jpeg";
import defaultIcon from "../public/icons/default.png";
import facebook from "../public/icons/facebook.svg";
import gFg from "../public/icons/gfg.png";
import google from "../public/icons/google.png";
import hckrEarth from "../public/icons/hackerearth.png";
import hckrRank from "../public/icons/hackerrank.svg";
import leetCode from "../public/icons/leetcode.png";
import newton from "../public/icons/newtonSchool.jpg";
import topCoder from "../public/icons/topcoder.png";
import yukiCoder from "../public/icons/yuriCoder.png";
import Image from "next/image";
import Link from "@mui/material/Link";
import { log } from "console";

const SYmainContainer = styled(Box)({
  backgroundColor: "#fafafd",
  padding: "1rem",
  marginTop: "1rem",
  borderRadius: "1rem",
  boxShadow: "0px -1px 10px 1px rgba(0,0,0,0.6)",
});

const SYheaderBox = styled(Box)({
  backgroundColor: "#a72e54",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
});

const SYheaderText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "5rem",
  fontWeight: "800",
  letterSpacing: "-3px",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
});

const SYlistBox = styled(Box)({
  backgroundColor: "#a72e54",
  padding: "0.5rem",
  borderRadius: "1rem",
  fontSize: "2.5rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  color: "white",
  marginBottom: "1rem",
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
});

const SYstack = styled(Stack)({
  backgroundColor: "#fafafd",
  margin: "0.5rem 0rem",
  color: "black",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  padding: "0.5vh",
  borderRadius: "0.5rem",
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
  height: "4.5rem",
  "&:hover": {
    backgroundColor: "#d56789",
  },
});

const SYstackText = styled(Typography)({
  color: "black",
  fontSize: "1.1rem",
  margin: "0rem 0.5rem",
  fontFamily: "Poppins",
});

const SYcontestName = styled(Link)({
  color: "black",
  fontSize: "1.1rem",
  margin: "0rem 0.5rem",
  fontFamily: "Poppins",
  fontWeight: "500",
});

const SYstackTextB = styled(SYstackText)({
  fontWeight: "600",
});

const SYbutton = styled(Button)({
  backgroundColor: "#a72e54",
  color: "white",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "1.1rem",
  "&:hover": {
    backgroundColor: "white",
    color: "#a72e54",
  },
});

const ContestTracker = () => {
  const handleDate = (dateItem: string) => {
    const newDate = new Date(dateItem);
    return date.format(newDate, "DD.MM.YY");
  };

  const handleTime = (dateItem: string) => {
    const newDate = new Date(dateItem);
    return date.format(newDate, "hh:mm A");
  };

  const checkValid = (dateItem: string, host: string) => {
    const newDate = new Date(dateItem);
    const currentDate = new Date();
    if (
      (host.includes("codechef") ||
        host.includes("codeforces") ||
        host.includes("atcoder") ||
        host.includes("hackerrank") ||
        host.includes("hackerearth") ||
        host.includes("leetcode") ||
        host.includes("topcoder") ||
        host.includes("facebook") ||
        host.includes("google") ||
        host.includes("geeksforgeeks") ||
        host.includes("yukicoder") ||
        host.includes("newton") ||
        host.includes("codingninjas")) &&
      newDate > currentDate
    )
      return true;
    else return false;
  };

  const handleImage = (platform: string) => {
    if (platform.includes("codechef")) {
      return codechef;
    } else if (platform.includes("codeforces")) {
      return codeforces;
    } else if (platform.includes("atcoder")) {
      return atcoder;
    } else if (platform.includes("hackerrank")) {
      return hckrRank;
    } else if (platform.includes("hackerearth")) {
      return hckrEarth;
    } else if (platform.includes("leetcode")) {
      return leetCode;
    } else if (platform.includes("topcoder")) {
      return topCoder;
    } else if (platform.includes("facebook")) {
      return facebook;
    } else if (platform.includes("google")) {
      return google;
    } else if (platform.includes("geeksforgeeks")) {
      return gFg;
    } else if (platform.includes("yukicoder")) {
      return yukiCoder;
    } else if (platform.includes("newton")) {
      return newton;
    } else if (platform.includes("codingninjas")) {
      return codingNinjas;
    } else {
      return defaultIcon;
    }
  };

  const handleEventCreation = (contest: any) => {
    const startDate = new Date(contest.start);
    const endDate = new Date(contest.end);
    const eventLink = `https://calendar.google.com/calendar/r/eventedit?text=${
      contest.title
    }&dates=${startDate.toISOString().replace(/-|:|\.\d\d\d/g, "")}/${endDate
      .toISOString()
      .replace(
        /-|:|\.\d\d\d/g,
        ""
      )}&details=Contest Created by DSA companion&location=${
      contest.url
    }&sf=true&output=xml`;
    console.log(eventLink);
    window.open(eventLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Box>
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
        }}
      >
        <TopNavBar />
        <SYmainContainer>
          <SYheaderBox>
            <SYheaderText variant="h1">Contest Tracker</SYheaderText>
          </SYheaderBox>
          <SYlistBox>
            <SYstack
              sx={{
                "&:hover": {
                  backgroundColor: "#fafafd",
                },
              }}
            >
              <SYstackTextB
                sx={{
                  marginLeft: 0,
                }}
              >
                Host
              </SYstackTextB>
              <SYstackTextB
                sx={{
                  minWidth: "4rem",
                  paddingLeft: "0.8rem",
                }}
              >
                Date
              </SYstackTextB>
              <SYstackTextB
                sx={{
                  minWidth: "5rem",
                  paddingLeft: "0.8rem",
                }}
              >
                Start
              </SYstackTextB>
              <SYstackTextB>Duration</SYstackTextB>
              <SYstackTextB
                sx={{
                  paddingLeft: "4rem",
                }}
              >
                Name
              </SYstackTextB>
            </SYstack>
            {contestJSON.map((contest) => {
              if (checkValid(contest.start, contest.host))
                return (
                  <SYstack>
                    <Link
                      href={"https://" + contest.host}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={handleImage(contest.host)}
                        width="48px"
                        height="40px"
                      />
                    </Link>
                    <SYstackText>{handleDate(contest.start)}</SYstackText>
                    <SYstackText
                      sx={{
                        minWidth: "5rem",
                      }}
                    >
                      {handleTime(contest.start)}
                    </SYstackText>
                    <SYstackText
                      sx={{
                        minWidth: "5rem",
                      }}
                    >
                      {contest.hr_duration + " hr"}
                    </SYstackText>
                    <SYcontestName
                      href={contest.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      {contest.title}
                    </SYcontestName>
                    <SYbutton
                      title="Add to Google Calendar"
                      onClick={() => {
                        handleEventCreation(contest);
                      }}
                    >
                      <EventAvailableIcon />
                    </SYbutton>
                  </SYstack>
                );
            })}
          </SYlistBox>
        </SYmainContainer>
      </Box>
    </Box>
  );
};

export default ContestTracker;
