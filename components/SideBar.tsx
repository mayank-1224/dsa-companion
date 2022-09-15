import Box from "@mui/material/Box";
import { Icon, SvgIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import StorageIcon from "@mui/icons-material/Storage";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Scrollchor } from "react-scrollchor";
import Router from "next/router";
import Button from "@mui/material/Button";

const SideBar = () => {
  return (
    <>
      <Box
        className="sideBar"
        sx={{
          position: "fixed",
          top: "0",
        }}
      >
        <nav className="main-menu">
          <ul>
            <li
              className="NavListItem"
              onClick={() => {
                Router.push("/");
              }}
            >
              <a className="has-subnav">
                <HomeIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li
              className="NavListItem"
              onClick={() => {
                Router.push("/SDEsheets");
              }}
            >
              <a className="has-subnav">
                <ListAltIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">SDE Sheets</span>
              </a>
            </li>
            <li
              className="NavListItem"
              onClick={() => {
                Router.push("/ContestTracker");
              }}
            >
              <a className="has-subnav">
                <MoreTimeIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">Contest Tracker</span>
              </a>
            </li>
            <li
              className="NavListItem"
              onClick={() => {
                Router.push("/SystemDesign");
              }}
            >
              <a className="has-subnav">
                <SettingsSuggestIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">System Design</span>
              </a>
            </li>
            <li
              className="NavListItem"
              onClick={() => {
                Router.push("/SQL");
              }}
            >
              <a className="has-subnav">
                <StorageIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">SQL</span>
              </a>
            </li>
            <li
              className="NavListItem"
              onClick={() => {
                Router.push("/EverythingDSA");
              }}
            >
              <a className="has-subnav">
                <AltRouteIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">Everything DSA</span>
              </a>
            </li>
            <li className="NavListItem">
              <a className="has-subnav">
                <SupportAgentIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">Support</span>
              </a>
            </li>
            <li className="NavListItem">
              <a className="has-subnav">
                <DraftsIcon
                  className="navIcon"
                  fontSize="large"
                  sx={{ width: "70px !important", height: "40px !important" }}
                />
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </Box>
      <Box
        className="topBar"
        sx={{
          // border: "1px solid black",
          position: "sticky",
          top: "0",
          height: "50px",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Button
          onClick={() => {
            Router.push("/ContestTracker");
          }}
        >
          <ListAltIcon className="topIcon" />
        </Button>
        <Button
          onClick={() => {
            Router.push("/ContestTracker");
          }}
        >
          <MoreTimeIcon className="topIcon" />
        </Button>
        <Button
          onClick={() => {
            Router.push("/SQL");
          }}
        >
          <SettingsSuggestIcon className="topIcon" />
        </Button>
        <Button
          onClick={() => {
            Router.push("/SQL");
          }}
        >
          <StorageIcon className="topIcon" />
        </Button>
        <Button
          onClick={() => {
            Router.push("/EverythingDSA");
          }}
        >
          <AltRouteIcon className="topIcon" />
        </Button>
        <Button>
          <DraftsIcon className="topIcon" />
        </Button>
      </Box>
    </>
  );
};

export default SideBar;
