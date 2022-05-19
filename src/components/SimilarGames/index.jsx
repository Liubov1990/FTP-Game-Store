import React from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function SimilarGames() {
  const classes = useStyles();
  const { similarGames } = useSelector(state => state.gamePageReducer);

  return (
    <div className={classes.similarGames}>
      <h2>Similar games</h2>
      {similarGames
        ? similarGames?.map(({ id, name }) => <Chip key={id} label={name} classes={{ root: classes.chipRoot }} />)
        : "No games in the list"}
    </div>
  );
}
export default SimilarGames;
