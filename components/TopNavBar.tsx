import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Router from "next/router";

import {
  NavContainer,
  NavText,
  LoginButton,
  LoginText,
} from "./StyledComponents";

const TopNavBar = () => {
  return (
    <NavContainer>
      <NavText
        variant="h1"
        onClick={() => {
          Router.push("/");
        }}
      >
        DSA Companion
      </NavText>
      <LoginButton variant="contained">
        <LoginText variant="h6">Log In</LoginText>
      </LoginButton>
    </NavContainer>
  );
};

export default TopNavBar;
