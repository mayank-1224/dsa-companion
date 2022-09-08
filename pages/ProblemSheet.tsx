import * as React from "react";
import { useState } from "react";
import TopNavBar from "../components/TopNavBar";
import { Box } from "@mui/material";
import ListComponent from "../components/ListComponent";
import useProblems from "../hooks/useProblems";
import sJSON from "../hooks/StriverJSON.json";

const ProblemSheet = () => {
  const { problemSet, sJSON } = useProblems();
  console.log(sJSON);

  return (
    <>
      <TopNavBar />
      <Box
        sx={{
          //border: "1px solid red",
          margin: "2vh 20vw",
        }}
      >
        <ListComponent />
      </Box>
    </>
  );
};

export default ProblemSheet;
