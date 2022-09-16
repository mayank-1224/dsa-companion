import { Typography } from "@mui/material";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import {
  SYmainContainer,
  SYouterBox,
  SYheaderStack,
  SYheaderText,
  SYsubheaderText,
  SYbutton,
  SYbuttonText,
  SYcollapsibleStack,
  SYdataGrid,
} from "../styles/StyledComponents/StyledComponents";
const ArshGoyalSheet = () => {
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#e28743",
            }}
          >
            <SYheaderText>Arsh Goyal SDE Sheet</SYheaderText>
            <SYsubheaderText>Coming Soon!</SYsubheaderText>
          </SYheaderStack>
        </SYouterBox>
      </SYmainContainer>
    </>
  );
};

export default ArshGoyalSheet;
