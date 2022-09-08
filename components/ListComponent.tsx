/* eslint-disable react/jsx-key */
import * as React from "react";
import { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import sJSON from "../hooks/StriverJSON.json";
import Link from "@mui/material/Link";

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
const ListComponent = () => {
  const allDivisions = sJSON.allDivisions;
  // console.log(allDivisions.Arrays);

  return (
    <>
      <h1>{sJSON.name}</h1>
      <h2>Number of Topics: {sJSON.topicCount}</h2>
      {allDivisions.map((division) => {
        return (
          <div
            style={{
              marginBottom: "2%",
            }}
          >
            <h2>{division.name}</h2>
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
              sx={{
                color: "white",
                marginBottom: "20px",
                fontSize: "1rem",
                "& .MuiDataGrid-checkboxInput": {
                  color: "white",
                },
                "& .MuiDataGrid-sortIcon": {
                  color: "white",
                },
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default ListComponent;
