import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { Button, Link } from "@material-ui/core";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import { makeStyles } from "@material-ui/core/styles";
// react-responsive-carousel
import { Carousel } from "react-responsive-carousel";
// components
import Pending from "../../components/Pending";
// actions
import { clearRandomImagesState } from "../../redux/actions/imagesSearchActions";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function Slider() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { randomImagesList, status } = useSelector(state => state.imagesSearchReducer);

  const [activeSlideData, setActiveSlideData] = React.useState(null);

  useEffect(() => {
    return function cleanUp() {
      dispatch(clearRandomImagesState());
    };
  }, [dispatch]);

  return (
  <>
    <div className={classes.slider}>
      {status === "FAILURE" && <div className={`${classes.slider} noData`}></div>}
      {status === "PENDING" && <Pending />}
      {status === "SUCCESS" && (
        <>
          <Carousel
            autoPlay
            infiniteLoop
            interval="5000"
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            animationHandler="fade"
            swipeable={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const currentSlide = randomImagesList[index];
              if (isSelected) {
                queueMicrotask(() => setActiveSlideData(currentSlide));
                return (
                  <div className={classes.indicatorWrap}>
                    <li
                      className={`${classes.indicatorStyles} active`}
                      aria-label={`Selected: ${label} ${index + 1}`}
                    />
                    <span className={classes.title}>{currentSlide.title}</span>
                  </div>
                );
              }
              return (
                <li
                  className={classes.indicatorStyles}
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
            {randomImagesList.map(value => {
              return (
                <div key={value.id} className={classes.sliderItem}>
                  <img src={value.screenshots[0]?.image} alt="" height="100%" width="100%" />
                </div>
              );
            })}
          </Carousel>

          <div className={classes.contentWrapper}>
            <div className={classes.playNow}>
              <img src={`${process.env.PUBLIC_URL}/images/be_a_hero.png`} alt="" className={classes.gameLogo} />
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
                  <div title="Platform" className={classes.platformStatusInfo}>
                    <ImportantDevicesIcon classes={{ root: classes.svgRoot }} />
                    <p>{activeSlideData?.platform}</p>
                  </div>
                )}
                {activeSlideData?.status && (
                  <div title="Status" className={classes.platformStatusInfo}>
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
    </>
  );
}
export default Slider;
