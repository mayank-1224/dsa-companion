import * as React from "react";
import Typography from "@mui/material/Typography";
import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import useProblems from "../hooks/useProblems";
import Link from "@mui/material/Link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import bJSON from "../hooks/BlindJSON.json";

const columns: GridColDef[] = [
  { field: "id", headerName: "S. No", width: 80 },
  { field: "name", headerName: "Problem Name", width: 400 },
  { field: "difficulty", headerName: "Difficulty", width: 150 },
  {
    field: "link",
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
];

interface division {
  name: string;
  problems: any;
}

const Blind75Sheet = () => {
  const { problemTrack, setProblemTrack, sheetProgress } = useProblems();
  const allDivisions = bJSON.divisions;
  return (
    <>
      <TopNavBar />
      <Box
        sx={{
          margin: "2vh 20vw",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "4rem",
          }}
        >
          {bJSON.name}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "2.5rem",
          }}
        >
          Number of Weeks: {bJSON.weekCount}
        </Typography>
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
                  marginBottom: "0.2rem",
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
                selectionModel={problemTrack.Blind75}
                onSelectionModelChange={(newSelection) => {
                  setProblemTrack({
                    ...problemTrack,
                    Blind75: newSelection,
                  });
                }}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  "& .MuiDataGrid-checkboxInput": {
                    color: "white",
                  },
                  "& .MuiDataGrid-sortIcon": {
                    color: "white",
                  },
                }}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Blind75Sheet;
