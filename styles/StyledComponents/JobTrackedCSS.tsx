import {
  Box,
  Stack,
  Typography,
  Button,
  styled,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Select,
} from "@mui/material";

import DatePicker from "@mui/x-date-pickers";

export const MainContainer = styled(Box)({
  padding: "0 20vw",
  height: "100%",
  marginBottom: "25rem",
});

export const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  //   border: "1px solid black",
  backgroundColor: "#6D597A",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
});

export const StyledTitle = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "4.5rem",
  fontWeight: "800",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "3rem",
  },
  alignSelf: "flex-start",
});

export const StyledStats = styled(Typography)({
  fontSize: "2.3rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "1.5rem",
  },
});

export const StyledStatsCount = styled(Typography)({
  fontSize: "2rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "1.5rem",
  },
});

export const StatContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FormBox = styled(Box)({
  backgroundColor: "#355070",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
});

export const FormDivs = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  //   border: "1px solid black",
});

export const StyledTextField = styled(TextField)({
  width: "100%",
  margin: "0.4rem",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderRadius: "0.6rem",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "Poppins",
    fontSize: "1.2rem",
    color: "white",
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    color: "white",
  },
});

export const StyledJobTextField = styled(StyledTextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "1.1rem",
    color: "black",
  },
  "& .MuiInputLabel-root": {
    fontSize: "1.1rem",
    color: "black",
  },
});

export const StyledSelect = styled(Select)({
  width: "100%",
  borderRadius: "5px",
  padding: "5px",
  margin: "5px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export const StyledButton = styled(Button)({
  width: "100%",
  height: "4rem",
  margin: "0.4rem",
  borderRadius: "0.9rem",
  "& .MuiButton-label": {
    color: "white",
  },
  "& .MuiButton-root": {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  padding: "0rem",
});

export const StyledStack = styled(Stack)({
  width: "100%",
  backgroundColor: "#355070",
  marginBottom: "1rem",
  padding: "0.5rem 0.5rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
});

export const JobContainer = styled(Box)({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "0.7rem",
  padding: "0.2rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
});

export const JobText = styled(Typography)({
  color: "black",
  fontSize: "1.1rem",
  fontFamily: "Poppins",
  fontWeight: "400",
  //   textShadow: "1px 1px 1px rgba(0,0,0,0.3)",
  "@media (max-width: 700px)": {
    fontSize: "1.5rem",
  },
  alignSelf: "center",
  justifySelf: "center",
  width: "100%",
  margin: "2px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
