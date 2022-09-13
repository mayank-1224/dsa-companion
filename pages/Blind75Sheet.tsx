import Typography from "@mui/material/Typography";
import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import bJSON from "../hooks/BlindJSON.json";
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

const Blind75Sheet = () => {
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
  console.log(sheetProgress);

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
              backgroundColor: "#a72e54",
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
                {bJSON.name}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Kollektif",
                  fontSize: "2.5rem",
                  fontWeight: "600",
                }}
              >
                Number of Topics: {bJSON.topicCount} <br />
                {sheetProgress[2]} / {bJSON.problemCount} problems solved
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "#a72e54",
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
                  Blind75: [],
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
          {/* <CollapsibleTable division={bJSON.divisions} /> */}
          <Box>
            {bJSON.divisions.map((division: any) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "#a72e54",
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
                          selectionModel={problemTrack.Blind75}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Blind75: newSelection,
                            });
                          }}
                          sx={{
                            color: "black",
                            fontSize: "1rem",
                            border: "none",
                            "& .MuiDataGrid-checkboxInput": {
                              color: "#a72e54",
                            },
                            "& .MuiDataGrid-sortIcon": {
                              color: "#a72e54",
                            },
                            "& .MuiDataGrid-cellCheckbox": {
                              color: "#a72e54",
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

export default Blind75Sheet;
