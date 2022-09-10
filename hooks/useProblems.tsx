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

interface problemTrackInterface {
  Striver: number[];
  Babbar: number[];
  Blind75: number[];
  Grind75: number[];
  Gfg: number[];
  ArshGoyal: number[];
}

const useProblems = () => {
  const [clickName, setClickName] = useState(""); // name of the clicked sheet
  const [problemSetLoading, setProblemSetLoading] = useState(true); // loading state of the problem set
  const [problemTrack, setProblemTrack] = useState({}); // problem track of the user from local storage
  const sJSON = require("./StriverJSON.json"); // Striver JSON file
  const bJSON = require("./BlindJSON.json"); // Blind75 JSON file

  // setting initial problem track in local storage
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
      setProblemTrack(proTrack);
    } else {
      var proTrack = JSON.parse(localStorage.getItem("problemTrack") || "{}");
      setProblemTrack(proTrack);
    }
  }, []);

  // updating problem track in local storage
  useEffect(() => {
    if (Object.keys(problemTrack).length !== 0) {
      console.log("Updating local storage history");
      localStorage.setItem("problemTrack", JSON.stringify(problemTrack));
    }
  }, [problemTrack]);

  //Pushing the required page according to the card clicked
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
    problemSetLoading: problemSetLoading,
    setProblemSetLoading: setProblemSetLoading,
    sJSON,
    bJSON,
    problemTrack: problemTrack as problemTrackInterface,
    setProblemTrack: setProblemTrack,
  };
};

export default useProblems;
