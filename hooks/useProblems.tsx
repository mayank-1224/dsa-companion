import { useEffect, useState, useRef } from "react";
import Router from "next/router";

interface newObj {
  Striver: number[];
  Babbar: number[];
  Blind75: number[];
  Grind75: number[];
  Gfg: number[];
  ArshGoyal: number[];
}

const useProblems = () => {
  const [clickName, setClickName] = useState("");
  const [problemSet, setProblemSet] = useState();
  const [problemSetLoading, setProblemSetLoading] = useState(true);
  const [problemTrack, setProblemTrack] = useState({});
  const [cnt, setCnt] = useState(0);
  const [updateTrack, setUpdateTrack] = useState(false);
  const sJSON = require("./StriverJSON.json");
  const initialRender = useRef(true);

  useEffect(() => {
    if (localStorage.getItem("problemTrack") === null) {
      let newObj: newObj = {
        Striver: [],
        Babbar: [],
        Blind75: [],
        Grind75: [],
        Gfg: [],
        ArshGoyal: [],
      };
      localStorage.setItem("problemTrack", JSON.stringify(newObj));
      var proTrack = JSON.parse(localStorage.getItem("problemTrack") || "{}");
      // console.log(problemTrack);
      console.log("im here");
      setProblemTrack(proTrack);
    } else {
      var proTrack = JSON.parse(localStorage.getItem("problemTrack") || "{}");
      setProblemTrack(proTrack);
      // console.log(problemTrack);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(problemTrack).length !== 0) {
      localStorage.setItem("problemTrack", JSON.stringify(problemTrack));
    }
  }, [problemTrack]);

  //page display logic
  useEffect(() => {
    if (clickName === "Striver SDE Sheet") {
      Router.push("/StriverSheet");
    } else if (clickName === "Love Babbar SDE Sheet") {
      Router.push("/BabbarSheet");
    } else if (clickName === "Blind 75") {
      Router.push("/Blind75Sheet");
    } else if (clickName === "Grind 75") {
      Router.push("/Grind75Sheet");
    } else if (clickName === "GeeksForGeeks Sheet") {
      Router.push("/GfgSheet");
    } else if (clickName === "Arsh Goyal Sheet") {
      Router.push("/ArshGoyalSheet");
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
    problemTrack: problemTrack,
    setProblemTrack: setProblemTrack,
  };
};

export default useProblems;
