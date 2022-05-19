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
    <div className={classes.description}>
      <h2>{gameDetails?.title}</h2>
      <p>{gameDetails?.description}</p>
    </div>
  );
}
export default GameDescription;
