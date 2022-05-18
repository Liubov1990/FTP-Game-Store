import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { Button, Link, Chip, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// components
import Layout from "../../components/Layout";
import ThumbnailSlider from "../../components/ThumbnailSlider";
// actions
import {
  getSpecificDataAsync,
  getVideoSearchAsync,
  getGameDataAsync,
  clearGamePageState
} from "../../redux/actions/gamePageActions";
// styles
import { styles } from "./styles";
import { errorStyles } from "./../PageNotFound/styles";

const useStyles = makeStyles(styles);
const errorUseStyles = makeStyles(errorStyles);

function GamePage() {
  const classes = useStyles();
  const errorClasses = errorUseStyles();
  const dispatch = useDispatch();

  const { specificData, videoSource, similarGames, status } = useSelector(state => state.gamePageReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificDataAsync(id));
    dispatch(getVideoSearchAsync());
    dispatch(getGameDataAsync());

    return function cleanUp() {
      dispatch(clearGamePageState());
    };
  }, []);

  return (
    <Layout>
      {status === "PENDING" && <div className={classes.loadingWrapper}><CircularProgress className={`${classes.root} ${classes.colorPrimary}`} /></div>}
      {status === "FAILURE" && <div className={errorClasses.errorView}></div>}
      {status === "SUCCESS" && (
        <div className={classes.gameInfo}>
          <div className={classes.shortDetails}>
            <div className={classes.videoWrapper}>
              {videoSource ? (
                <video src={videoSource} controls autoPlay muted></video>
              ) : (
                <img src={specificData?.thumbnail} alt="" className={classes.image} />
              )}
            </div>
            <div className={classes.glance}>
              {videoSource && <img src={specificData?.thumbnail} alt="" className={classes.image} />}
              <div className={classes.glanceInfo}>
                <div className={classes.shortDescription}>
                  <h4>Short description:</h4> {specificData?.short_description}
                </div>
                <div>
                  <h4>Ganre:</h4> {specificData?.genre}
                </div>
                <div>
                  <h4>Status:</h4> {specificData?.status}
                </div>
                <div>
                  <h4>Release date:</h4> {specificData?.release_date}
                </div>
                <div>
                  <h4>Developer:</h4> {specificData?.developer}
                </div>
                <div>
                  <h4>Publisher:</h4> {specificData?.publisher}
                </div>
                <Link href={specificData?.game_url} target="_blank" className={classes.linkDecoration}>
                  <Button variant="contained" classes={{ root: classes.buttonRoot }}>
                    Play now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.description}>
            <h2>{specificData?.title}</h2>
            <p>{specificData?.description}</p>
          </div>
          <div className={classes.requirements}>
            <div className={classes.screenshots}>
              <ThumbnailSlider />
            </div>
            <div className={classes.systemRequirements}>
              <h2>Minimum system requirements</h2>
              {specificData?.minimum_system_requirements ? (
                <>
                  <div>
                    <h4>Os:</h4>{" "}
                    {specificData?.minimum_system_requirements?.os === "?" ||
                    specificData?.minimum_system_requirements?.os === null ||
                    specificData?.minimum_system_requirements?.os === "Not defined"
                      ? "Unavailable"
                      : specificData?.minimum_system_requirements?.os}
                  </div>
                  <div>
                    <h4>Processor:</h4>{" "}
                    {specificData?.minimum_system_requirements?.processor === "?" ||
                    specificData?.minimum_system_requirements?.processor === null ||
                    specificData?.minimum_system_requirements?.processor === "Not defined"
                      ? "Unavailable"
                      : specificData?.minimum_system_requirements?.processor}
                  </div>
                  <div>
                    <h4>Memory:</h4>{" "}
                    <span>
                      {specificData?.minimum_system_requirements?.memory === "?" ||
                      specificData?.minimum_system_requirements?.memory === null ||
                      specificData?.minimum_system_requirements?.memory === "Not defined"
                        ? "Unavailable"
                        : specificData?.minimum_system_requirements?.memory || "Unavailable"}
                    </span>
                  </div>
                  <div>
                    <h4>Graphics:</h4>{" "}
                    <span>
                      {specificData?.minimum_system_requirements?.graphics === "?" ||
                      specificData?.minimum_system_requirements?.graphics === null ||
                      specificData?.minimum_system_requirements?.graphics === "Not defined"
                        ? "Unavailable"
                        : specificData?.minimum_system_requirements?.graphics || "Unavailable"}
                    </span>
                  </div>
                  <div>
                    <h4>Storage:</h4>{" "}
                    <span>
                      {specificData?.minimum_system_requirements?.storage === "?" ||
                      specificData?.minimum_system_requirements?.storage === null ||
                      specificData?.minimum_system_requirements?.storage === "Not defined"
                        ? "Unavailable"
                        : specificData?.minimum_system_requirements?.storage}
                    </span>
                  </div>
                </>
              ) : (
                <p>System requirements are currently unavailable</p>
              )}
            </div>
          </div>
          <div className={classes.similarGames}>
            <h2>Similar games</h2>
            {similarGames
              ? similarGames?.map(({ id, name }) => <Chip key={id} label={name} classes={{ root: classes.chipRoot }} />)
              : "No games in the list"}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default GamePage;
