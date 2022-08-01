import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// material-ui
import { Button, Link } from "@material-ui/core";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import { makeStyles } from "@material-ui/core/styles";
// components
import Pending from "../../components/Pending";
// styles
import { styles } from "./styles";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles(styles);

function Slider() {
  const classes = useStyles();

  const { randomImagesList, status } = useSelector(state => state.imagesSearchReducer);
  const imagesList = Object.values(randomImagesList);

  const [activeSlideData, setActiveSlideData] = React.useState(null);

  const indicatorStyles = {
    background: "rgba(0,0,0,.5)",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    outline: "2px solid #8b0000",
    padding: "5px",
    margin: "7px 7px 7px 24px",
    cursor: "pointer"
  };

  return (
    <div className={classes.slider}>
      {status === "LOADING" && <Pending />}
      {status === "SUCCESS" && (
        <>
          <Carousel
            autoPlay
            infiniteLoop
            interval={5000}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            animationHandler="fade"
            swipeable={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const currentSlide = imagesList[index];
              if (isSelected) {
                queueMicrotask(() => setActiveSlideData(currentSlide));
                return (
                  <div className={classes.indicatorWrap}>
                    <li
                      style={{ ...indicatorStyles, background: "#fff" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                    />
                    <span className={classes.title}>{currentSlide.title}</span>
                  </div>
                );
              }
              return (
                <li
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {imagesList.map(value => {
              return (
                <div key={value.id} className={classes.sliderItem}>
                  <img src={value.screenshots[0]?.image} alt="" height="100%" width="100%" />
                </div>
              );
            })}
          </Carousel>

          <div className={classes.contentWrapper}>
            <div className={classes.playNow}>
              <img src={`${'/images/be_a_hero.png'}`} alt="" className={classes.gameLogo} />
              <Link href={activeSlideData?.game_url} target="_blank">
                <Button variant="contained" classes={{ root: classes.buttonRoot }}>
                  Play now
                </Button>
              </Link>
            </div>
          </div>
          <div className={classes.sliderBar}>
            <div className={classes.sliderBarContent}>
              <div className={classes.publicationInfo}>
                <div>
                  <span className={classes.published}>Published</span>
                  <span className={classes.releaseDate}>{activeSlideData?.release_date}</span>
                </div>
              </div>
              <div className={classes.platformStatusInfoWrap}>
                {activeSlideData?.platform && (
                  <div title="Platform" className={classes. platformStatusInfo}>
                    <ImportantDevicesIcon classes={{ root: classes.svgRoot }} />
                    <p>{activeSlideData?.platform}</p>
                  </div>
                )}
                {activeSlideData?.status && (
                  <div title="Status" className={classes. platformStatusInfo}>
                    <FindReplaceIcon classes={{ root: classes.svgRoot }} />
                    <p>{activeSlideData?.status}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Slider;
