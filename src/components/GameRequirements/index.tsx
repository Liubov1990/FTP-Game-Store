import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// redux
import { RootState } from "../../redux/store";
import { MinimumSystemRequirementsType } from "../../redux/reducers/imageSearchReducer/types";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GameRequirements(): ReactElement {
  const classes = useStyles();
  const details = useSelector((state: RootState): RootState["gamePageReducer"]["gameDetails"]["minimum_system_requirements"] | void => state.gamePageReducer.gameDetails?.minimum_system_requirements || {} );

  return (
    <div className={classes.requirementsWrap}>
      <div className={classes.requirements}>
        <h2>Minimum system requirements</h2>
        <div className={classes.systemRequirements}>
          {Object.keys(details as MinimumSystemRequirementsType).length !== 0 ? (
            <div className={classes.systemRequirementsInfo}>
              <div>
                <h4>Os: </h4>
                <span>
                  {details?.os === "?" || details?.os === null || details?.os === "Not defined"
                    ? "Unavailable"
                    : details?.os}
                </span>
              </div>
              <div>
                <h4>Processor: </h4>
                <span>
                  {details?.processor === "?" || details?.processor === null || details?.processor === "Not defined"
                    ? "Unavailable"
                    : details?.processor}
                </span>
              </div>
              <div>
                <h4>Memory: </h4>
                <span>
                  {details?.memory === "?" || details?.memory === null || details?.memory === "Not defined"
                    ? "Unavailable"
                    : details?.memory}
                </span>
              </div>
              <div>
                <h4>Graphics: </h4>
                <span>
                  {details?.graphics === "?" || details?.graphics === null || details?.graphics === "Not defined"
                    ? "Unavailable"
                    : details?.graphics}
                </span>
              </div>
              <div>
                <h4>Storage: </h4>
                <span>
                  {details?.storage === "?" || details?.storage === null || details?.storage === "Not defined"
                    ? "Unavailable"
                    : details?.storage}
                </span>
              </div>
            </div>
          ) : (
            <p>System requirements are unavailable</p>
          )}
          <div className={classes.systemRequirementsImage}></div>
        </div>
      </div>
    </div>
  );
}
export default GameRequirements;
