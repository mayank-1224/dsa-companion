import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import GrindJSON from "../hooks/GrindJSON.json";
import { ThemeProvider } from "@mui/material";
import { Grind169DataGridTheme } from "../styles/StyledComponents/StyledDataGrid";
import {
  SYouterBox,
  SYheaderStack,
  SYheaderText,
  SYsubheaderText,
  SYbutton,
  SYbuttonText,
  SYcollapsibleStack,
  SYdataGrid,
  SYmainContainer,
} from "../styles/StyledComponents/StyledComponents";

const Grind169Sheet = () => {
  require("typeface-poppins");

  const { problemTrack, setProblemTrack, sheetProgress } = useProblems();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S. No",
      flex: 1,
      maxWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Problem Name",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      minWidth: 100,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "link",
      headerName: "Link",
      minWidth: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
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
  // #7766e4
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#7766e4",
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
                color: "#7766e4",
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
                    backgroundColor: "#7766e4",
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
                      <ThemeProvider theme={Grind169DataGridTheme}>
                        <SYdataGrid
                          rows={division.problems}
                          columns={columns}
                          pageSize={10}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                          autoHeight
                          hideFooterSelectedRowCount
                          autoPageSize
                          disableColumnMenu
                          selectionModel={problemTrack.Grind169}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Grind169: newSelection,
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
      </SYmainContainer>
      <Footer />
    </>
  );
};

export default Grind169Sheet;
