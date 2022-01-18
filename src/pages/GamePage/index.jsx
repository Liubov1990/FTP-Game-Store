import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// components
import Layout from "../../components/Layout";
// actions
import { getSpecificDataAsync, getVideoSearchAsync, getGameDataAsync } from "../../redux/actions/gamePageActions";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GamePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { specificData, videoSource, similarGames } = useSelector(state => state.gamePageReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificDataAsync(id));
    dispatch(getVideoSearchAsync());
    dispatch(getGameDataAsync());
  }, []);

  return (
    <Layout>
      <div className={classes.gameInfo}>
        <div className={classes.shortDetails}>
          <div className={classes.videoWrapper}>
            <video
              src={videoSource}
              // autoPlay
              controls
            ></video>
            {!videoSource && <p>Trere is no video for this game :(</p>}
          </div>
          <div className={classes.glance}>
            <img src={specificData?.thumbnail} alt="" className={classes.image} />
            <div className={classes.glanceInfo}>
              <div>
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
              <Link href={specificData?.game_url} target="_blank">
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
            {specificData?.screenshots?.map(({ id, image }) => (
              <div
                key={id}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%"
                }}
                className={classes.screenshotImage}
              ></div>
            ))}
          </div>
          <div className={classes.systemRequirements}>
            <h2>Minimum system requirements</h2>
            {specificData?.minimum_system_requirements ? (
              <>
                <div>
                  <h4>Os:</h4> {specificData?.minimum_system_requirements?.os}
                </div>
                <div>
                  <h4>Processor:</h4> {specificData?.minimum_system_requirements?.processor}
                </div>
                <div>
                  <h4>Memory:</h4> <span>{specificData?.minimum_system_requirements?.memory}</span>
                </div>
                <div>
                  <h4>Graphics:</h4> <span>{specificData?.minimum_system_requirements?.graphics}</span>
                </div>
                <div>
                  <h4>Storage:</h4> <span>{specificData?.minimum_system_requirements?.storage}</span>
                </div>
              </>
            ) : (
              <p>Unfortunatelly there is no data about system requirements</p>
            )}
          </div>
        </div>
        <div className={classes.reviewsSeсtion}>
          <div className={classes.addReviews}></div>
          <div className="similarGames">
            <h2>Similar games</h2>
            {similarGames?.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GamePage;
