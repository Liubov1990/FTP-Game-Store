import React from "react";
import { useSelector } from "react-redux";
// material-ui
import { Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GlanceGameInfo() {
  const classes = useStyles();
  const { gameDetails, videoSource } = useSelector(state => state.gamePageReducer);

  return (
    <div className={classes.shortGameInfo}>
      <div className={classes.videoWrapper}>
        {videoSource ? (
          <video src={videoSource} controls autoPlay muted></video>
        ) : (
          <img src={gameDetails?.thumbnail} alt="" className={classes.image} />
        )}
      </div>
      <div className={classes.glance}>
        {videoSource && <img src={gameDetails?.thumbnail} alt="" className={classes.image} />}
        <div className={classes.glanceInfo}>
          <div className={classes.shortDescription}>
            <h4>Short description:</h4> {gameDetails?.short_description}
          </div>
          <div>
            <h4>Ganre:</h4> {gameDetails?.genre}
          </div>
          <div>
            <h4>Status:</h4> {gameDetails?.status}
          </div>
          <div>
            <h4>Release date:</h4> {gameDetails?.release_date}
          </div>
          <div>
            <h4>Developer:</h4> {gameDetails?.developer}
          </div>
          <div>
            <h4>Publisher:</h4> {gameDetails?.publisher}
          </div>
          <Link href={gameDetails?.game_url} target="_blank" className={classes.linkDecoration}>
            <Button variant="contained" classes={{ root: classes.buttonRoot }}>
              Play now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default GlanceGameInfo;
