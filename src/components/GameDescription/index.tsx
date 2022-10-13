import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
// styles
import { styles } from "./styles";
import { RootState } from "../../redux/store";

const useStyles = makeStyles(styles);

function GameDescription(): ReactElement {
  const classes: ClassNameMap<string> = useStyles();
  const { gameDetails } = useSelector((state: RootState): RootState["gamePageReducer"] => state.gamePageReducer);

  return (
    <div data-testid="game-description" className={classes.parallax}>
      <div className={classes.description}>
        <h2>{gameDetails?.title}</h2>
        <p className={classes.descriptionText}>{gameDetails?.description}</p>
      </div>
    </div>
  );
}
export default GameDescription;
