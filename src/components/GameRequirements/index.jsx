import React from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// styles
import { styles } from "./styles";
//compoments
import ThumbnailSlider from "../ThumbnailSlider";

const useStyles = makeStyles(styles);

function GameRequirements() {
  const classes = useStyles();
  const details = useSelector(
    state => state.gamePageReducer.gameDetails?.minimum_system_requirements || {}
  );

  return (
    <div className={classes.requirements}>
      <div className={classes.screenshots}>
        <ThumbnailSlider />
      </div>
      <div className={classes.systemRequirements}>
        <h2>Minimum system requirements</h2>
        {Object.keys(details)?.length !== 0 ? (
          <>
            <div>
              <h4>Os:</h4> {details?.os === "?" || details?.os === null || details?.os === "Not defined" ? "Unavailable" : details?.os}
            </div>
            <div>
              <h4>Processor:</h4>
              {details?.processor === "?" || details?.processor === null || details?.processor === "Not defined" ? "Unavailable" : details?.processor}
            </div>
            <div>
              <h4>Memory:</h4>
              <span>
                {details?.memory === "?" || details?.memory === null || details?.memory === "Not defined"
                  ? "Unavailable"
                  : details?.memory || "Unavailable"}
              </span>
            </div>
            <div>
              <h4>Graphics:</h4>
              <span>
                {details?.graphics === "?" || details?.graphics === null || details?.graphics === "Not defined"
                  ? "Unavailable"
                  : details?.graphics || "Unavailable"}
              </span>
            </div>
            <div>
              <h4>Storage:</h4>
              <span>{details?.storage === "?" || details?.storage === null || details?.storage === "Not defined" ? "Unavailable" : details?.storage}</span>
            </div>
          </>
        ) : (
          <p>System requirements are currently unavailable</p>
        )}
      </div>
    </div>
  );
}
export default GameRequirements;
