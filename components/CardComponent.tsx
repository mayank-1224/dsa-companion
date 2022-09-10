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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface Object {
  titleName: string;
  subtitle: string;
  imgLink: string;
  summary: string;
  moreData: string;
  pageLink: string;
}

interface CardData {
  data: Object;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardComponent = (data: CardData) => {
  const [expanded, setExpanded] = useState(false);
  const { setClickName } = useProblems();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginTop: "5px" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.data.titleName}
        subheader={data.data.subtitle}
      />
      <CardMedia
        component="img"
        height="270px"
        width="500px"
        image={data.data.imgLink}
        alt="Paella dish"
        onClick={() => {
          setClickName(data.data.titleName);
        }}
        sx={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.data.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
          <Typography paragraph>{data.data.moreData}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardComponent;
