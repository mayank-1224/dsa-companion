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
const GfgSheet = () => {
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#267138",
            }}
          >
            <SYheaderText>GeeksForGeeks SDE Sheet</SYheaderText>
            <SYsubheaderText>Coming Soon!</SYsubheaderText>
          </SYheaderStack>
        </SYouterBox>
      </SYmainContainer>
    </>
  );
};

export default GfgSheet;
