import React from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GameDescription() {
  const classes = useStyles();
  const { gameDetails } = useSelector(state => state.gamePageReducer);

  return (
    <div className={`${classes.description} ${classes.parallax}`}>
      <h2>{gameDetails?.title}</h2>
      <p className={classes.descriptionText}>{gameDetails?.description}</p>
    </div>
  );
}
export default GameDescription;
