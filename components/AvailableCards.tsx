import CardComponent from "./CardComponent";
import { Box } from "@mui/material";
import cardData from "../hooks/CardDataJSON.json";

const AvailableCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {cardData.cardData.map((card: any) => {
        return (
          <Box>
            <CardComponent data={card} />
          </Box>
        );
      })}
    </Box>
  );
};

export default AvailableCards;
