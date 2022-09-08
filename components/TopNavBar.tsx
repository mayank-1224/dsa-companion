import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const TopNavBar = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "orange",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        width: "100%",
        height: "4.5rem",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          href="#"
          underline="hover"
          color="black"
          sx={{
            fontSize: "2.5rem",
            marginLeft: "2rem",
          }}
        >
          {"DSA Companion"}
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          width: "20rem",
          marginRight: "3rem",
        }}
      >
        <Link href="#" underline="hover" color="black">
          {"Contact"}
        </Link>
        <Link href="#" underline="hover" color="black">
          {"About Us"}
        </Link>
        <Link href="#" underline="hover" color="black">
          {"LogIn"}
        </Link>
      </Box>
    </Stack>
  );
};

export default TopNavBar;
