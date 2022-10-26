import React, { useState, useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
// react-responsive-carousel
import { Carousel } from "react-responsive-carousel";
// components
import Pending from "../Pending";
import ButtonComponent from "../ButtonComponent";
// actions
import { clearRandomImagesState } from "../../redux/actions/imagesSearchActions";
// styles
import { styles } from "./styles";
import { RootState } from "../../redux/store";
import { IFullGameInfo } from "../../redux/reducers/imageSearchReducer/types";

const useStyles = makeStyles(styles);

function Slider(): ReactElement {

  const classes: ClassNameMap = useStyles();
  const dispatch = useDispatch();

  const { randomImagesList, status } = useSelector((state: RootState): RootState["imagesSearchReducer"] => state.imagesSearchReducer);
  const [activeSlideData, setActiveSlideData] = useState<IFullGameInfo | void>();  

  useEffect(() => {
    return function cleanUp() {
      dispatch(clearRandomImagesState());
    };
  }, [dispatch]);

  return (
    <>
      <div className={classes.slider}>
        {status === "FAILURE" && <div data-testid="no-data-test" className={`${classes.slider} noData`}></div>}
        {status === "PENDING" && <Pending data-testid="pending-test" />}
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
                const currentSlide = randomImagesList[index];
                if (isSelected) {
                  queueMicrotask(() => setActiveSlideData(currentSlide));
                  return (
                    <div className={classes.indicatorsWrap}>
                      <li className={`${classes.indicator} active`} aria-label={`Selected: ${label} ${index + 1}`} />
                      <span className={classes.title}>{currentSlide.title}</span>
                    </div>
                  );
                }
                return (
                  <li
                    className={classes.indicator}
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
              {randomImagesList.map((value) => {
                return (
                  <div key={value.id} className={classes.sliderItem}>
                    <img src={value.screenshots[0]?.image} alt="" height="100%" width="100%" />
                  </div>
                );
              })}
            </Carousel>
            <div className={classes.playNow}>
              <img src={`${process.env.PUBLIC_URL}/images/be_a_hero.png`} alt="" className={classes.gameLogo} />
              <Link href={activeSlideData?.game_url} target="_blank">
                <ButtonComponent value="Play now" />
              </Link>
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