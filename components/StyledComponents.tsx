import { Box, Stack, Typography, Button, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const SYouterBox = styled(Box)({
  backgroundColor: "#fafafd",
  padding: "1rem",
  marginTop: "1rem",
  borderRadius: "1rem",
  boxShadow: "0px -1px 10px 1px rgba(0,0,0,0.6)",
});

export const SYheaderStack = styled(Stack)({
  //   backgroundColor: "#a72e54",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  flexDirection: "row",
  justifyContent: "space-between",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
});

export const SYheaderText = styled(Typography)({
  fontSize: "4rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
});

export const SYsubheaderText = styled(SYheaderText)({
  fontSize: "2.5rem",
  fontWeight: "600",
});

export const SYbutton = styled(Button)({
  //   color: "#a72e54",
  backgroundColor: "white",
  padding: "0.5rem",
  width: "10rem",
  height: "2rem",
  alignSelf: "flex-end",
  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
});

export const SYbuttonText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "1rem",
  fontWeight: "600",
});

export const SYcollapsibleStack = styled(Stack)({
  //   backgroundColor: "#a72e54",
  padding: "0.5rem",
  borderRadius: "1rem",
  fontSize: "2.5rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  color: "white",
  marginBottom: "1rem",
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
});

export const SYdataGrid = styled(DataGrid)({
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
});
