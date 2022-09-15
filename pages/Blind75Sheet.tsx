import Typography from "@mui/material/Typography";
import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import bJSON from "../hooks/BlindJSON.json";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material";

import {
  SYouterBox,
  SYheaderStack,
  SYheaderText,
  SYsubheaderText,
  SYbutton,
  SYbuttonText,
  SYcollapsibleStack,
  SYdataGrid,
  Blind75DataGridTheme,
} from "../components/StyledComponents";

const Blind75Sheet = () => {
  const { problemTrack, setProblemTrack, sheetProgress, setSheetProgress } =
    useProblems();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S. No",
      maxWidth: 80,
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    { field: "name", headerName: "Problem Name", flex: 1, minWidth: 400 },
    {
      field: "difficulty",
      headerName: "Difficulty",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "link",
      headerName: "Link",
      flex: 1,
      align: "center",
      headerAlign: "center",
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

  // #a72e54;
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
              backgroundColor: "#a72e54",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{bJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {bJSON.topicCount} <br />
                {sheetProgress[2]} / {bJSON.problemCount} problems solved
              </SYsubheaderText>
            </Box>
            <SYbutton
              variant="contained"
              onClick={() => {
                setProblemTrack({
                  ...problemTrack,
                  Blind75: [],
                });
              }}
              sx={{
                color: "#a72e54",
              }}
            >
              <SYbuttonText>Clear Progress</SYbuttonText>
            </SYbutton>
          </SYheaderStack>
          {/* <CollapsibleTable division={bJSON.divisions} /> */}
          <Box>
            {bJSON.divisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#a72e54",
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
                      <ThemeProvider theme={Blind75DataGridTheme}>
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
                          disableColumnSelector
                          selectionModel={problemTrack.Blind75}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Blind75: newSelection,
                            });
                          }}
                          sx={{
                            "& .MuiTableRow-root.Mui-selected": {
                              border: "2px solid #a72e54",
                            },
                          }}
                        />
                      </ThemeProvider>
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

export default Blind75Sheet;
