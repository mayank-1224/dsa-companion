import {
  FooterContainer,
  FooterText,
  InnerBox,
} from "../styles/StyledComponents/FooterCSS";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Footer = () => {
  return (
    <FooterContainer>
      <InnerBox sx={{}}>
        <FooterText>SDE Sheets Sources:</FooterText>
        <FooterText>Striver</FooterText>
        <FooterText>Love Babbar</FooterText>
        <FooterText>Blind75</FooterText>
        <FooterText>Grind 169</FooterText>
        <FooterText>GeeksForGeeks</FooterText>
        <FooterText>Arsh Goyal</FooterText>
      </InnerBox>
      <InnerBox>
        <FooterText
          sx={{
            fontSize: "1.5rem",
          }}
        >
          © 2022 DSA COMPANION
        </FooterText>
      </InnerBox>
      <InnerBox
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/mayank-patel12/",
            "_blank",
            "noopener,noreferrer"
          );
        }}
        sx={{
          cursor: "pointer",
        }}
      >
        <FooterText>Created with</FooterText>
        <FavoriteIcon sx={{ color: "red", marginTop: "4px" }} />
        <FooterText>by Mayank Patel</FooterText>
      </InnerBox>
    </FooterContainer>
  );
};

export default Footer;
