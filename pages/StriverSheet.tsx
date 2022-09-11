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
          borderRadius: "1rem",
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
              {sJSON.name}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Kollektif",
                fontSize: "2.5rem",
                fontWeight: "600",
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
            }}
            onClick={() => {
              setProblemTrack({
                ...problemTrack,
                Striver: [],
              });
            }}
          >
            Clear Progress
          </Button>
        </Box>

        {/*Problem Table begins*/}
        <Box>
          {allDivisions.map((division: division) => {
            return (
              <Box
                sx={{
                  marginBottom: "2%",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    marginBottom: "0.2rem",
                    padding: "0.2rem 0.5rem",
                    backgroundColor: "#be2535",
                    borderRadius: "1rem",
                    fontFamily: "Kollektif",
                    fontWeight: "600",
                  }}
                >
                  {division.name}
                </Typography>
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
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default StriverSheet;
