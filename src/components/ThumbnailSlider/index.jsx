import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { getSpecificDataAsync } from "../../redux/actions/gamePageActions";

// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function ThumbnailSlider() {
  const classes = useStyles();

  const { specificData } = useSelector(state => state.gamePageReducer);
  const screenshotsArr = specificData?.screenshots;
  const firstSliderImage = specificData?.screenshots?.length ? specificData?.screenshots[0]?.image : null;
  const [sliderImage, setSliderImage] = React.useState(null);

  useEffect(() => {
    if (specificData?.screenshots?.length) {
      setSliderImage(specificData?.screenshots[0].image);
    }
  }, [firstSliderImage]);

  const handleThumbnail = arrow => {
    const currImgIndex = screenshotsArr.findIndex((item, index, screenshotsArr) => {
      return item.image === sliderImage;
    });
    if (arrow === "next") {
      return currImgIndex === screenshotsArr.length - 1
        ? setSliderImage(specificData?.screenshots[0].image)
        : setSliderImage(specificData?.screenshots[currImgIndex + 1].image);
    }

    return currImgIndex === 0 ? setSliderImage(specificData?.screenshots[screenshotsArr.length - 1].image) : setSliderImage(specificData?.screenshots[currImgIndex - 1].image);
  };

  return (
    <>
      {specificData?.screenshots?.length !== 0 ? (
        <>
          <div
            className={classes.frontImage}
            style={{
              backgroundImage: `url(${sliderImage})`,
            }}
          />
          <div className={classes.thumbnailImages}>
            {specificData?.screenshots?.map(({ id, image }) => (
              <div
                key={id}
                style={{
                  backgroundImage: `url(${image})`,
                  // width: "160px"
                  // height: "auto"
                }}
                className={`${classes.thumbnailImage} ${sliderImage === image && classes.activeThumbnailImage}`}
                onClick={() => setSliderImage(image)}
                data-position={specificData?.screenshots}
              />
            ))}
          </div>
          <div className={classes.controls}>
            <div className={classes.prevBtn} onClick={() => handleThumbnail("prev")}>
              <ArrowBackIosIcon />
            </div>
            <div className={classes.nextBtn} onClick={() => handleThumbnail("next")}>
              <ArrowForwardIosIcon />
            </div>
          </div>
        </>
      ) : (
        "<div></div>"
      )}
    </>
  );
}
export default ThumbnailSlider;
