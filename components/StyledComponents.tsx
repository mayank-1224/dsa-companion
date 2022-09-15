import { Box, Stack, Typography, Button, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";

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

export const StriverDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#eea8af",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#eea8af",
            "&:hover": {
              backgroundColor: "#eea8af",
            },
          },
        },
      },
    },
  },
});

export const BabbarDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#b5d7f2",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#b5d7f2",
            "&:hover": {
              backgroundColor: "#b5d7f2",
            },
          },
        },
      },
    },
  },
});
export const Blind75DataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#f0cad6",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#f0cad6",
            "&:hover": {
              backgroundColor: "#f0cad6",
            },
          },
        },
      },
    },
  },
});
export const Grind169DataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#d7d2f7",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#d7d2f7",
            "&:hover": {
              backgroundColor: "#d7d2f7",
            },
          },
        },
      },
    },
  },
});
export const GfGDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#f0cad6",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#f0cad6",
            "&:hover": {
              backgroundColor: "#f0cad6",
            },
          },
        },
      },
    },
  },
});
export const ArshDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#f0cad6",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#f0cad6",
            "&:hover": {
              backgroundColor: "#f0cad6",
            },
          },
        },
      },
    },
  },
});
