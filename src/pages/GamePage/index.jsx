import React, { useEffect } from "react";
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
// actions
import {
  getSpecificDataAsync,
  clearGamePageState
} from "../../redux/actions/gamePageActions";
// styles
import { styles } from "./styles";

const useStyles = makeStyles(styles);

function GamePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { status } = useSelector(state => state.gamePageReducer);
  
  useEffect(() => {
    dispatch(getSpecificDataAsync(id));

    return function cleanUp() {
      dispatch(clearGamePageState());
    };
  }, [dispatch, id]);

  return (
    <Layout>
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