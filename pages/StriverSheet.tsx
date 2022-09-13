/* eslint-disable react/jsx-key */
import * as React from "react";
import Typography from "@mui/material/Typography";
import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import Link from "@mui/material/Link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import sJSON from "../hooks/StriverJSON.json";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";

const columns: GridColDef[] = [
  { field: "id", headerName: "S. No", width: 80 },
  { field: "name", headerName: "Problem Name", width: 400 },
  { field: "difficulty", headerName: "Difficulty", width: 150 },
  {
    field: "leetCodeLink",
    headerName: "LeetCode Link",
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
  {
    field: "gfgLink",
    headerName: "GfG Link",
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
    field: "cnLink",
    headerName: "Coding Ninjas Link",
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

interface division {
  name: string;
  problems: any;
}
const StriverSheet = () => {
  const { problemTrack, setProblemTrack, sheetProgress } = useProblems();
  const allDivisions = sJSON.allDivisions;
  return (
    //Outer-most container
    <>
      <SideBar />
      <Box
        sx={{
          backgroundColor: "#f84f39",
          width: "100vw",
          height: "100%",
          padding: "0 20vw",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <TopNavBar />
        {/* Main container */}
        <Box
          sx={{
            // width: "60vw",
            backgroundColor: "#fafafd",
            padding: "1rem",
            marginTop: "1rem",
            borderRadius: "1rem",
            boxShadow: "0px -1px 10px 1px rgba(0,0,0,0.6)",
          }}
        >
          {/*Page Heading*/}
          <Box
            sx={{
              color: "white",
              backgroundColor: "#be2535",
              marginBottom: "1rem",
              padding: "0.5rem",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "4rem",
                  fontFamily: "Kollektif",
                  fontWeight: "800",
                  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
                }}
              >
                {sJSON.name}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Kollektif",
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
                }}
              >
                Number of Topics: {sJSON.topicCount}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Kollektif",
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
                }}
              >
                {sheetProgress[0]} / {sJSON.problemCount} problems solved
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "#be2535",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "10rem",
                height: "2rem",
                alignSelf: "flex-end",

                ":hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
              onClick={() => {
                setProblemTrack({
                  ...problemTrack,
                  Striver: [],
                });
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kollektif",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Clear Progress
              </Typography>
            </Button>
          </Box>

          {/*Problem Table begins*/}
          <Box>
            {allDivisions.map((division: any) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "#be2535",
                    padding: "0.5rem",
                    borderRadius: "1rem",
                    fontSize: "2.5rem",
                    fontFamily: "Kollektif",
                    fontWeight: "800",
                    color: "white",
                    marginBottom: "1rem",
                    boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
                  }}
                >
                  <Collapsible
                    trigger={division.name}
                    triggerStyle={{
                      cursor: "pointer",
                      textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
                    }}
                    transitionTime={250}
                    open={true}
                  >
                    <Box
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "1rem",
                      }}
                    >
                      {/* <TableComponent data={division.problems} /> */}
                      <div style={{ width: "100%" }}>
                        <DataGrid
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
                          sx={{
                            color: "black",
                            fontSize: "1rem",
                            border: "none",
                            "& .MuiDataGrid-checkboxInput": {
                              color: "#be2535",
                            },
                            "& .MuiDataGrid-sortIcon": {
                              color: "#be2535",
                            },
                            "& .MuiDataGrid-cellCheckbox": {
                              color: "#be2535",
                            },
                          }}
                        />
                      </div>
                    </Box>
                  </Collapsible>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StriverSheet;
