import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// components
import Layout from "../../components/Layout";
import Pending from "../../components/Pending";
import Error from "../../components/Error";
import GlanceGameInfo from "../../components/GlanceGameInfo";
import GameDescription from "../../components/GameDescription";
import GameRequirements from "../../components/GameRequirements";
import SimilarGames from "../../components/SimilarGames";
// actions
import {
  getSpecificDataAsync,
  getVideoSearchAsync,
  getGameDataAsync,
  clearGamePageState
} from "../../redux/actions/gamePageActions";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GamePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { status } = useSelector(state => state.gamePageReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificDataAsync(id));
    dispatch(getVideoSearchAsync());
    dispatch(getGameDataAsync());

    return function cleanUp() {
      dispatch(clearGamePageState());
    };
  }, []);

  return (
    <Layout>
      {status === "PENDING" && (
        <Pending />
      )}
      {status === "FAILURE" && <Error />}
      {status === "SUCCESS" && (
        <div className={classes.gameInfo}>
          <GlanceGameInfo />
          <GameDescription />
          <GameRequirements />
          <SimilarGames />
        </div>
      )}
    </Layout>
  );
}

export default GamePage;
