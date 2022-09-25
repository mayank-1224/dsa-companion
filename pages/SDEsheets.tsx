import CardComponent from "../components/CardComponent";
import cardData from "../hooks/CardDataJSON.json";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  MainBox,
  InnerBox,
  SYtitleText,
  SYsubText,
} from "../styles/StyledComponents/SDEsheetsCSS";

const SDEsheets = () => {
  require("typeface-poppins");

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    swipe: true,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          // speed: 1000,
          // autoplaySpeed: 1000,
        },
      },
    ],
  };
  require("typeface-poppins");

  return (
    <>
      <TopNavBar />
      <SideBar />
      <MainBox>
        <InnerBox
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SYtitleText variant="h2">All your DSA sheets</SYtitleText>
          <SYsubText variant="h2">in 'ONE' place!</SYsubText>
        </InnerBox>
        <InnerBox>
          <Slider {...sliderSettings}>
            {cardData.cardData.map((data) => (
              <CardComponent data={data} />
            ))}
          </Slider>
        </InnerBox>
      </MainBox>
      <Footer />
    </>
  );
};

export default SDEsheets;
