import CardComponent from "./CardComponent";
import { Box } from "@mui/material";

const AvailableCards = () => {
  type CardData = {
    titleName: string;
    subtitle: string;
    summary: string;
    moreData: string;
    imgLink: string;
    pageLink: string;
  };
  const striver: CardData = {
    titleName: "Striver SDE Sheet",
    subtitle: "191 Curated Problems",
    summary:
      "Sheet for the sole purpose of quick revision and preparation in less time focusing on top coding interview problems",
    moreData: "More Data",
    imgLink: "https://i.postimg.cc/6qCXQ577/tuf.png",
    pageLink: "/striver-sheet",
  };
  const loveBabbar: CardData = {
    titleName: "Love Babbar SDE Sheet",
    subtitle: "450 Curated Problems",
    summary:
      "A sheet that covers almost every concept of Data Structures and Algorithms.",
    moreData: "More Data",
    imgLink: "https://i.postimg.cc/G3T3Nbpn/love.jpg",
    pageLink: "/babbar-sheet",
  };
  const blind75: CardData = {
    titleName: "Blind 75",
    subtitle: "75 Curated Problems",
    summary:
      "A list of the most important 75 questions on LeetCode. Many other LeetCode questions are a mash of the techniques from these individual questions.",
    moreData: "More Data",
    imgLink: "https://i.postimg.cc/Yq4r5Mqw/blind.png",
    pageLink: "/blind75",
  };
  const grind75: CardData = {
    titleName: "Grind 75",
    subtitle: "75 Curated Problems",
    summary:
      "Grind 75 is a better version of Blind 75 which goes beyond 75 questions. You can customize the available time you have, difficulty, topics, etc.",
    moreData: "More Data",
    imgLink: "https://i.postimg.cc/0Q542dwn/grind.png",
    pageLink: "/grind75",
  };
  const gfgSheet: CardData = {
    titleName: "GeeksForGeeks Sheet",
    subtitle: "Covers all the segments round-wise",
    summary:
      "This Sheet is a list of the most important topics or the most popular questions that are asked in the Software Development Engineer Interviews.",
    moreData: "More Data",
    imgLink: "https://i.postimg.cc/vm3Pjw6H/gfg.png",
    pageLink: "/gfg-sheet",
  };
  const arshGoyal: CardData = {
    titleName: "Arsh Goyal Sheet",
    subtitle: "280 Curated Problems",
    summary:
      "Curated list of previous year and most frequently asked problems from Data Structures and Algorithms.",
    moreData: "More Data",
    imgLink: "https://i.postimg.cc/MKTJ6xSR/arsh.png",
    pageLink: "/arsh-goyal-sheet",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Box>
        <CardComponent data={striver} />
      </Box>
      <Box>
        <CardComponent data={loveBabbar} />
      </Box>
      <Box>
        <CardComponent data={blind75} />
      </Box>
      <Box>
        <CardComponent data={gfgSheet} />
      </Box>
      <Box>
        <CardComponent data={arshGoyal} />
      </Box>
      <Box>
        <CardComponent data={grind75} />
      </Box>
    </Box>
  );
};

export default AvailableCards;
