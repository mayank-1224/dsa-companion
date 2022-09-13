import CardComponent from "../components/CardComponent";
import cardData from "../hooks/CardDataJSON.json";
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SDEsheets = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    swipe: true,
  };

  return (
    <Box>
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
        }}
      >
        <TopNavBar />
        <Box
          sx={{
            // border: "1px solid black",
            height: "92vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: "8vh",
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Kollektif",
                fontWeight: "bold",
                fontSize: "6.5rem",
                color: "white",
                letterSpacing: "-3px",
                textShadow: "5px 4px 5px rgba(0,0,0,0.5)",
              }}
            >
              All your DSA sheets
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Kollektif",
                fontWeight: "bold",
                fontSize: "5rem",
                color: "black",
                textShadow: "3px 2px 3px rgba(0,0,0,0.5)",
              }}
            >
              in 'ONE' place!
            </Typography>
          </Box>
          <Box>
            <Slider {...sliderSettings}>
              {cardData.cardData.map((data) => (
                <CardComponent data={data} />
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SDEsheets;
