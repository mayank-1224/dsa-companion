import Typography from "@mui/material/Typography";
import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import GrindJSON from "../hooks/GrindJSON.json";
import SideBar from "../components/SideBar";
import Button from "@mui/material/Button";
import Collapsible from "react-collapsible";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import { useState } from "react";

interface division {
  name: string;
  problems: any;
}

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

  return (
    <>
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
        }}
      >
        <TopNavBar />
        <Box
          sx={{
            backgroundColor: "#fafafd",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          {/* {Sheet Title and other Info} */}
          <Box
            sx={{
              backgroundColor: "#8a7ce8",
              marginBottom: "1rem",
              padding: "0.5rem",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "4rem",
                  fontFamily: "Kollektif",
                  fontWeight: "800",
                }}
              >
                {GrindJSON.name}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Kollektif",
                  fontSize: "2.5rem",
                  fontWeight: "600",
                }}
              >
                Number of Topics: {GrindJSON.topicCount} <br />
                {sheetProgress[3]} / {GrindJSON.problemCount} problems solved
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "#8a7ce8",
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
                  Grind169: [],
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
          {/* <CollapsibleTable division={GrindJSON.divisions} /> */}
          <Box>
            {GrindJSON.divisions.map((division: any) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "#8a7ce8",
                    padding: "0.5rem",
                    borderRadius: "1rem",
                    fontSize: "2.5rem",
                    fontFamily: "Kollektif",
                    fontWeight: "800",
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  <Collapsible
                    trigger={division.name}
                    triggerStyle={{
                      cursor: "pointer",
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
                          selectionModel={problemTrack.Grind169}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Grind169: newSelection,
                            });
                          }}
                          sx={{
                            color: "black",
                            fontSize: "1rem",
                            border: "none",
                            "& .MuiDataGrid-checkboxInput": {
                              color: "#8a7ce8",
                            },
                            "& .MuiDataGrid-sortIcon": {
                              color: "#8a7ce8",
                            },
                            "& .MuiDataGrid-cellCheckbox": {
                              color: "#8a7ce8",
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

export default Grind169Sheet;
