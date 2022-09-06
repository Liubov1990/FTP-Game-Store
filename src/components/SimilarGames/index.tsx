import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

// styles
import { styles } from "./styles";
import { RootState } from "../../redux/store";

const useStyles = makeStyles(styles);

function SimilarGames(): ReactElement {
  const classes = useStyles();
  const { similarGames } = useSelector((state: RootState): RootState["gamePageReducer"] => state.gamePageReducer);

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
