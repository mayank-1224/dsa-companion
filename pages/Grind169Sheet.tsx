import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { useState } from "react";

import GrindJSON from "../hooks/GrindJSON.json";

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

const Grind169Sheet = () => {
  const { problemTrack, setProblemTrack, sheetProgress, setSheetProgress } =
    useProblems();
  const columns: GridColDef[] = [
    { field: "id", headerName: "S. No", width: 80 },
    { field: "name", headerName: "Problem Name", width: 400 },
    { field: "difficulty", headerName: "Difficulty", width: 150 },
    {
      field: "link",
      headerName: "Link",
      width: 170,
      renderCell: (cellValues) => {
        if (cellValues.value != "")
          return (
            <Link href={`${cellValues.value}`} target={"_blank"}>
              LeetCode
            </Link>
          );
      },
      sortable: false,
    },
  ];
  var vall = 1;
  const loll = GrindJSON;
  loll.divisions.map((item) => {
    item.problems.map((problem) => {
      problem.id = vall++;
    });
  });
  console.log(loll);
  // #8a7ce8
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
              backgroundColor: "#8a7ce8",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{GrindJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {GrindJSON.topicCount} <br />
                {sheetProgress[3]} / {GrindJSON.problemCount} problems solved
              </SYsubheaderText>
            </Box>
            <SYbutton
              variant="contained"
              onClick={() => {
                setProblemTrack({
                  ...problemTrack,
                  Grind169: [],
                });
              }}
              sx={{
                color: "#8a7ce8",
              }}
            >
              <SYbuttonText>Clear Progress</SYbuttonText>
            </SYbutton>
          </SYheaderStack>
          {/* <CollapsibleTable division={GrindJSON.divisions} /> */}
          <Box>
            {GrindJSON.divisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#8a7ce8",
                  }}
                >
                  <Collapsible
                    trigger={division.name}
                    transitionTime={250}
                    open={true}
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
                        selectionModel={problemTrack.Grind169}
                        onSelectionModelChange={(newSelection) => {
                          setProblemTrack({
                            ...problemTrack,
                            Grind169: newSelection,
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

export default Grind169Sheet;
