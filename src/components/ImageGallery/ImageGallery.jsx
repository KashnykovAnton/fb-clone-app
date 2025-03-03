import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ImageGallery = ({ images }) => {
  if (images.length === 0) return null;

  return (
    <Carousel
      indicators={images.length > 1}
      navButtonsAlwaysInvisible={images.length === 1}
      autoPlay={false}
      animation="slide"
      swipe={true}
      cycleNavigation={true}
      NextIcon={<ArrowForwardIos />}
      PrevIcon={<ArrowBackIos />}
    >
      {images.map((img, index) => (
        <Box
          key={index}
          component="img"
          src={img}
          alt={`image-${index}`}
          sx={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      ))}
    </Carousel>
  );
};

export default ImageGallery;
