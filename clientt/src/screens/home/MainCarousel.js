import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import palette from "../../themes/palette";

// import all image from assets folder by a function from stack overflow called importAll
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const heroTextureImports = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)"); // if the screen size is above 600px then isNonMobile becomes true and if not it will be false

  return (
    <div style={{direction:'initial'}}>
      <Carousel
        infiniteLoop={true} // these are the propertys of react responsive carousel which is explained in the git hub page
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(
          onClickHandler,
          hasPrev,
          label // this is the previous button, onClickHandler is provided by react responsive carousel
        ) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(
          onClickHandler,
          hasNext,
          label // this is the next button,
        ) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {Object.values(heroTextureImports).map(
          (
            texture,
            index // we are grabing all those images that we imported via heroTextureImports and we are cyclin through each one and the Boxes below is for individual images
          ) => (
            <Box key={`carousel-image-${index}`}>
              <img
                src={texture}
                alt={`carousel-${index}`}
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover", // this css makes the image responsive by cutting the edges of the image as the screen shrinks
                  backgroundAttachment: "fixed", // to keep it in place
                }}
              />
              <Box
                color="white"
                padding="20px"
                borderRadius="1px"
                textAlign="left"
                backgroundColor="rgba(0, 0, 0, 0.4)"
                position="absolute"
                top="46%"
                left={isNonMobile ? "10%" : "0"} // isNonMobile true is for the desktop and mobile version is false
                right={isNonMobile ? undefined : "0"}
                margin={isNonMobile ? undefined : "0 auto"}
                maxWidth={isNonMobile ? undefined : "240px"}
              >
                <Typography color={palette.secondary[200]}>
                  لباس جدید --
                </Typography>{" "}
                {/* if we want these to be different with each image we need to create an object and cycle through it  */}
                <Typography variant="h1">فروش تابستانه</Typography>
                <Typography
                  fontWeight="bold"
                  color={palette.secondary[300]}
                  sx={{ textDecoration: "underline" }}
                >
                  بیشتر ببینید
                </Typography>
              </Box>
            </Box>
          )
        )}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
