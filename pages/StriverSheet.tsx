/* eslint-disable react/jsx-key */
import Typography from "@mui/material/Typography";
import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import sJSON from "../hooks/StriverJSON.json";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material";
import {
  SYouterBox,
  SYheaderStack,
  SYheaderText,
  SYsubheaderText,
  SYbutton,
  SYbuttonText,
  SYcollapsibleStack,
  SYdataGrid,
  StriverDataGridTheme,
} from "../components/StyledComponents";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "S. No",
    maxWidth: 80,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Problem Name",
    flex: 1,
    minWidth: 400,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "leetCodeLink",
    headerName: "LeetCode Link",
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
  {
    field: "gfgLink",
    headerName: "GfG Link",
    flex: 1,
    align: "center",
    headerAlign: "center",
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
    field: "cnLink",
    headerName: "Coding Ninjas Link",
    flex: 1,
    align: "center",
    headerAlign: "center",
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

const StriverSheet = () => {
  const { problemTrack, setProblemTrack, sheetProgress } = useProblems();
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
              backgroundColor: "#be2535",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{sJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {sJSON.topicCount} <br />
                {sheetProgress[0]} / {sJSON.problemCount} problems solved
              </SYsubheaderText>
            </Box>
            <SYbutton
              variant="contained"
              onClick={() => {
                setProblemTrack({
                  ...problemTrack,
                  Striver: [],
                });
              }}
              sx={{
                color: "#be2535",
              }}
            >
              <SYbuttonText>Clear Progress</SYbuttonText>
            </SYbutton>
          </SYheaderStack>
          {/* <CollapsibleTable division={sJSON.divisions} /> */}
          <Box>
            {sJSON.allDivisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#be2535",
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
                      <ThemeProvider theme={StriverDataGridTheme}>
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
                          selectionModel={problemTrack.Striver}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Striver: newSelection,
                            });
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

export default StriverSheet;
