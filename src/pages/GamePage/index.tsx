import React, { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// components
import Layout from "../../components/Layout";
import Error from "../../components/Error";
import GlanceGameInfo from "../../components/GlanceGameInfo";
import GameDescription from "../../components/GameDescription";
import GameRequirements from "../../components/GameRequirements";
import SimilarGames from "../../components/SimilarGames";
// redux
import { RootState } from "../../redux/store";
import { getSpecificDataAsync, clearGamePageState } from "../../redux/actions/gamePageActions";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

type IdRouteParams = {
  id: string;
};

function GamePage(): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams<IdRouteParams>();

  const { status } = useSelector((state: RootState): RootState["gamePageReducer"] => state.gamePageReducer);

  useEffect(() => {
    dispatch(getSpecificDataAsync(id));

    return function cleanUp() {
      dispatch(clearGamePageState());
    };
  }, [dispatch, id]);

  const returnContent = (): ReactElement => {
    if (status === "FAILURE") {
     return <Error />;
    } else if (status === "SUCCESS") {
     return <div className={classes.gameInfo}>
        <GlanceGameInfo />
        <GameDescription />
        <GameRequirements />
        <SimilarGames />
      </div>;
    }
    return <></>
  };

  return <Layout>{returnContent()}</Layout>;
}
export default GamePage;