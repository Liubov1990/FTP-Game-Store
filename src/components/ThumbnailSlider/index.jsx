import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// react-responsive-carousel
import { Carousel } from "react-responsive-carousel";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function ThumbnailSlider() {
  const classes = useStyles();

  const { gameDetails } = useSelector(state => state.gamePageReducer);
  const [screenshots, setScreenshots] = React.useState([]);
  const [sliderImage, setSliderImage] = React.useState(null);

  useEffect(() => {
    if (Object.keys(gameDetails).length) {
      const defaultImage = {
        id: "defaultImageId",
        image: gameDetails?.thumbnail
      };
      setSliderImage(defaultImage.image);
      if (gameDetails?.screenshots?.length) {
        setScreenshots([defaultImage, ...gameDetails?.screenshots]);
      }
    }
  }, [gameDetails]);

  return (
    <div
    className={classes.thumbnailSlider}
    >
      {screenshots?.length !== 0 ? (
          <Carousel
            autoPlay
            infiniteLoop={true}
            interval="10000"
            showStatus={false}
            showArrows={false}
            showIndicators={false}
          >
            {screenshots.map(({ id, image }) => (
              <img key={id} src={image} alt="" />
            ))}
          </Carousel>
      ) : (
        <div
          className={classes.resizedImage}
          style={{
            backgroundImage: `url(${gameDetails?.thumbnail})`
          }}
        ></div>
      )}
    </div>
  );
}
export default ThumbnailSlider;
