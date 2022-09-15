import { Box, Stack, Typography, Button, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";

// styled TOP NAV BAR--------------------------------------

export const NavContainer = styled(Box)({
  padding: "0 20vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "0.7rem",
  "@media (max-width: 600px)": {
    padding: "0.1rem 0.2rem",
  },
});

export const NavText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "3.5rem",
  fontWeight: "800",
  letterSpacing: "-3px",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "&:hover": {
    cursor: "pointer",
  },
  "@media (max-width: 600px)": {
    fontSize: "2.5rem",
  },
});

export const LoginButton = styled(Button)({
  backgroundColor: "white",
  borderRadius: "3rem",
  boxShadow: "7px 8px 15px -5px rgba(0,0,0,0.65)",
  ":hover": {
    backgroundColor: "black",
  },
  "@media (max-width: 600px)": {
    width: "4rem",
    height: "2rem",
    padding: "0.1rem",
  },
});

export const LoginText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "1.5rem",
  fontWeight: "800",
  letterSpacing: "1px",
  color: "#7a54a7",
  textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
  },
});

// styled TOP NAV BAR ENDS---------------------------------

// STYLED WELCOME PAGE-------------
export const SYmainBox = styled(Stack)({
  // border: "4px solid black",
  height: "100vh",
  padding: "0 20vw",
  "@media (max-width: 600px)": {
    padding: "0",
  },
});

export const SYinnerBox = styled(Box)({
  // border: "3px solid red",
  height: "100%",
  display: "flex",
  paddingBottom: "8rem",
  justifyContent: "space-around",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const SYtitleStack = styled(Stack)({
  // border: "1px solid blue",
  display: "flex",
  justifyContent: "center",
});

export const SYtitleText = styled(Typography)({
  fontFamily: "Kollektif",
  fontWeight: "800",
  display: "flex",
});

export const SYalertButton = styled(Button)({
  backgroundColor: "white",
  height: "5rem",
  margin: "1rem",
  padding: "0 1rem",
  borderTopLeftRadius: "3rem",
  borderBottomLeftRadius: "3rem",
  borderBottomRightRadius: "17rem",
  borderTopRightRadius: "17rem",
  boxShadow: "7px 8px 15px -5px rgba(0,0,0,0.65)",
  ":hover": {
    backgroundColor: "black",
  },
  "@media (max-width: 600px)": {
    height: "3rem",
    margin: "0.5rem",
    padding: "0 0.5rem",
    borderTopLeftRadius: "1.5rem",
    borderBottomLeftRadius: "1.5rem",
    borderBottomRightRadius: "8.5rem",
    borderTopRightRadius: "8.5rem",
  },
});

export const SYalertText = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: "500",
  fontSize: "1.5rem",
  // fontSize: "3vh",
  textTransform: "none",
  color: "#7a54a7",
  lineHeight: "0.8",
  textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
  },
});

// STYLED WELCOME PAGE--------------------------------------ends

// STYLED SDE SHEETS COMPONENTS-------------------------------
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
  alignContent: "space-around",
  "& .MuiDataGrid-checkboxInput": {
    color: "#a72e54",
  },
  "& .MuiDataGrid-sortIcon": {
    color: "#a72e54",
  },
  "& .MuiDataGrid-cellCheckbox": {
    color: "#a72e54",
  },
  "& .MuiDataGrid-cell": {
    fontFamily: "Poppins",
    fontSize: "1.rem",
    fontWeight: "500",
    // border: "1px solid black",
  },
  "& .MuiDataGrid-columnHeader": {
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  "& .MuiDataGrid-columnHeaders": {
    // backgroundColor: "#ebb6c6",
  },
  // "& .MuiDataGrid-row": {
  //   backgroundColor: "#fdfdfd",
  //   "&:hover": {
  //     backgroundColor: "#a72e54",
  //     color: "white",
  //   },
  // },
});

// STYLED SDE SHEETS COMPONENTS-------------------------------ends
