import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Box from "@mui/material/Box";
import date from "date-and-time";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
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

import {
  SYmainContainer,
  SYheaderBox,
  SYheaderText,
  SYlistBox,
  SYstack,
  SYstackText,
  SYcontestName,
  SYstackTextB,
  SYbutton,
} from "../styles/StyledComponents/ContestTracker";

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
