import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import useProblems from "../hooks/useProblems";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface Object {
  id: number;
  titleName: string;
  subtitle: string;
  imgLink: string;
  summary: string;
  Links: {
    link1: string;
    link1info: string;
    link2: string;
    link2info: string;
  };
  problemCount: number;
}

interface CardData {
  data: Object;
}

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const CardComponent = (data: CardData) => {
  // const [expanded, setExpanded] = useState(false);
  const [heart, setHeart] = useState(false);
  const { setClickName, sheetProgress } = useProblems();

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: "5px",
        boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        title={data.data.titleName}
        //sheetProgress[data.data.id - 1]} /{" "}{data.data.problemCount

        subheader={
          sheetProgress[data.data.id - 1] +
          " / " +
          data.data.problemCount +
          " solved"
        }
        sx={{
          "& .MuiCardHeader-title": {
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            fontWeight: "500",
          },
          ".MuiCardHeader-subheader": {
            fontFamily: "Poppins",
            fontSize: "1.1rem",
            fontWeight: "500",
          },
        }}
      />
      <CardMedia
        component="img"
        height="270px"
        width="500px"
        image={data.data.imgLink}
        alt={data.data.titleName}
        onClick={() => {
          setClickName(data.data.titleName);
        }}
        sx={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography
          sx={{
            fontFamily: "Poppins",
          }}
          variant="body2"
        >
          {data.data.summary}
        </Typography>
        <Typography fontWeight={600}>Credits: </Typography>
        <Typography fontFamily="Poppins" variant="body2">
          <Link href={data.data.Links.link1} underline="none" target={"_blank"}>
            {data.data.Links.link1info}
            <OpenInNewIcon
              sx={{
                width: "1rem",
                height: "1rem",
              }}
            />
          </Link>{" "}
          <br />
          <Link href={data.data.Links.link2} underline="none" target={"_blank"}>
            {data.data.Links.link2info}
            <OpenInNewIcon
              sx={{
                width: "1rem",
                height: "1rem",
              }}
            />
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {heart ? (
            <FavoriteIcon
              sx={{ color: "red" }}
              onClick={() => {
                setHeart(!heart);
              }}
            />
          ) : (
            <FavoriteIcon
              onClick={() => {
                setHeart(!heart);
              }}
            />
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Your Progress: {sheetProgress[data.data.id - 1]} /{" "}
            {data.data.problemCount}
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

export default CardComponent;
