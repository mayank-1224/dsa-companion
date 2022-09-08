import { useCallback, useEffect, useState } from "react";
import * as StriverJSON from "./StriverJSON.json";
import Router from "next/router";

const useProblems = () => {
  const [clickName, setClickName] = useState("");
  const [problemSet, setProblemSet] = useState();
  const [problemSetLoading, setProblemSetLoading] = useState(true);
  const sJSON = require("./StriverJSON.json");
  useEffect(() => {
    if (clickName === "Striver SDE Sheet") {
      // setProblemSet(sJSON);
      setProblemSetLoading(false);
      Router.push("/ProblemSheet");
      // console.log(sJSON);
    }
  }, [clickName]);
  return {
    clickName,
    setClickName,
    problemSet: problemSet,
    setProblemSet: setProblemSet,
    problemSetLoading: problemSetLoading,
    setProblemSetLoading: setProblemSetLoading,
    sJSON,
  };
};

export default useProblems;
