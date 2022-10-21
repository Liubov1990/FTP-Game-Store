import React, { useEffect, useState, ReactElement } from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// react-responsive-carousel
import { Carousel } from "react-responsive-carousel";
// styles
import { styles } from "./styles";
import { RootState } from "../../redux/store";
import { ScreenshotsType } from "../../redux/reducers/imageSearchReducer/types";

const useStyles = makeStyles(styles);

function ThumbnailSlider(): ReactElement {
  const classes = useStyles();

  const { gameDetails } = useSelector((state: RootState): RootState["gamePageReducer"] => state.gamePageReducer);
  const [screenshots, setScreenshots] = useState<ScreenshotsType[]>([]);

  useEffect(() => {
    if (Object.keys(gameDetails).length) {
      const defaultImage = {
        id: Date.now(),
        image: gameDetails?.thumbnail
      };

      if (gameDetails?.screenshots?.length) {
        setScreenshots([defaultImage, ...gameDetails?.screenshots]);
      }
    }
  }, [gameDetails]);

  return (
    <div className={classes.thumbnailSlider}>
      {screenshots?.length !== 0 ? (
        <Carousel
          autoPlay
          infiniteLoop={true}
          interval={10000}
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
          data-testid="default-background-image"
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
