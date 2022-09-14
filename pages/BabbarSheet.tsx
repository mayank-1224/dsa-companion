import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import lbJSON from "../hooks/BabbarJSON.json";

import {
  SYouterBox,
  SYheaderStack,
  SYheaderText,
  SYsubheaderText,
  SYbutton,
  SYbuttonText,
  SYcollapsibleStack,
  SYdataGrid,
} from "../components/StyledComponents";

const BabbarSheet = () => {
  const { problemTrack, setProblemTrack, sheetProgress, setSheetProgress } =
    useProblems();
  const columns: GridColDef[] = [
    { field: "id", headerName: "S. No", width: 80 },
    { field: "name", headerName: "Problem Name", width: 400 },
    { field: "difficulty", headerName: "Difficulty", width: 150 },
    {
      field: "link1",
      headerName: "Link 1",
      width: 170,
      renderCell: (cellValues) => {
        if (cellValues.value != "")
          return (
            <Link href={`${cellValues.value}`} target={"_blank"}>
              GeeksForGeeks
            </Link>
          );
      },
      sortable: false,
    },
    {
      field: "link2",
      headerName: "Link 2",
      width: 170,
      renderCell: (cellValues) => {
        if (cellValues.value != "")
          return (
            <Link href={`${cellValues.value}`} target={"_blank"}>
              Coding Ninjas
            </Link>
          );
      },
      sortable: false,
    },
  ];
  // console.log(sheetProgress);
  // #154c79
  return (
    <>
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
        }}
      >
        <TopNavBar />
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#154c79",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{lbJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {lbJSON.topicCount} <br />
                {sheetProgress[1]} / {lbJSON.problemCount} problems solved
              </SYsubheaderText>
            </Box>
            <SYbutton
              variant="contained"
              onClick={() => {
                setProblemTrack({
                  ...problemTrack,
                  Babbar: [],
                });
              }}
              sx={{
                color: "#154c79",
              }}
            >
              <SYbuttonText>Clear Progress</SYbuttonText>
            </SYbutton>
          </SYheaderStack>
          {/* <CollapsibleTable division={lbJSON.divisions} /> */}
          <Box>
            {lbJSON.divisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#154c79",
                  }}
                >
                  <Collapsible
                    trigger={division.name}
                    transitionTime={250}
                    open={false}
                    triggerStyle={{
                      cursor: "pointer",
                      textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Paper
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "1rem",
                      }}
                    >
                      {/* <TableComponent data={division.problems} /> */}
                      <SYdataGrid
                        rows={division.problems}
                        columns={columns}
                        pageSize={12}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        autoHeight
                        autoPageSize
                        hideFooter
                        disableColumnMenu
                        selectionModel={problemTrack.Babbar}
                        onSelectionModelChange={(newSelection) => {
                          setProblemTrack({
                            ...problemTrack,
                            Babbar: newSelection,
                          });
                        }}
                      />
                    </Paper>
                  </Collapsible>
                </SYcollapsibleStack>
              );
            })}
          </Box>
        </SYouterBox>
      </Box>
    </>
  );
};

export default BabbarSheet;
