import React from "react";
import { useSelector } from "react-redux";
// material-ui
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// styles
import { styles } from "./styles";
// components
import ThumbnailSlider from "../ThumbnailSlider";
import ButtonComponent from "../ButtonComponent";

const useStyles = makeStyles(styles);

function GlanceGameInfo() {
  const classes = useStyles();
  const { gameDetails } = useSelector(state => state.gamePageReducer);

  return (
    <div className={classes.glanceInfoWrap}>
      <div className={classes.glanceInfoContentWrap}>
        <div className={classes.screenshots}>
          <ThumbnailSlider />
        </div>
        <div className={classes.glance}>
          <div className={classes.glanceInfo}>
            <div>
              <h4>Short description: </h4><span className={classes.info}>{gameDetails?.short_description}</span>
            </div>
            <div>
              <h4>Genre: </h4><span className={classes.info}>{gameDetails?.genre}</span>
            </div>
            <div>
              <h4>Status: </h4><span className={classes.info}>{gameDetails?.status}</span>
            </div>
            <div>
              <h4>Release date: </h4><span className={classes.info}>{gameDetails?.release_date}</span>
            </div>
            <div>
              <h4>Developer: </h4><span className={classes.info}>{gameDetails?.developer}</span>
            </div>
            <div>
              <h4>Publisher: </h4><span className={classes.info}>{gameDetails?.publisher}</span>
            </div>
            <Link href={gameDetails?.game_url} target="_blank" className={classes.linkDecoration}>
              <ButtonComponent value="Play now"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GlanceGameInfo;
