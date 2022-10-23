import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer";
import SQLjson from "../hooks/SQLjson.json";
import Stack from "@mui/material/Stack";
import {
  HeadingText,
  StyledHeading,
  SYlistBox,
  SYstack,
  SYstackText,
} from "../styles/StyledComponents/SQLstyle";

const SQL = () => {
  require("typeface-poppins");

  return (
    <>
      <TopNavBar />
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
          "@media (max-width: 700px)": {
            padding: "0 5vw",
          },
        }}
      >
        <StyledHeading>
          <HeadingText>All About SQL</HeadingText>
          <SYstackText
            sx={{
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            {SQLjson.description}
          </SYstackText>
        </StyledHeading>
        <SYlistBox>
          {SQLjson.topics.map((topic) => (
            <Box>
              <HeadingText
                sx={{
                  fontSize: "3.5rem",
                }}
              >
                {topic.name}
              </HeadingText>
              {topic.divisions.map((division) => (
                <Box>
                  <HeadingText
                    sx={{
                      fontSize: "2.5rem",
                    }}
                  >
                    {division.name}
                  </HeadingText>
                  <SYstackText
                    sx={{
                      color: "white",
                    }}
                  >
                    {division.description}
                  </SYstackText>
                  <Box>
                    {division.items.map((item) => (
                      <SYstack
                        sx={{
                          flexDirection: "row",
                        }}
                      >
                        <SYstackText
                          sx={{
                            width: "12%",
                            marginRight: "1%",
                          }}
                        >
                          {item.name}
                        </SYstackText>
                        <SYstackText
                          sx={{
                            width: "42%",
                            marginRight: "1%",

                            size: "0.5rem",
                          }}
                        >
                          {item.description}
                        </SYstackText>
                        <code
                          style={{
                            width: "42%",
                            fontSize: "1rem",
                          }}
                        >
                          {item.example}
                        </code>
                      </SYstack>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </SYlistBox>
      </Box>
      <Footer />
    </>
  );
};

export default SQL;
