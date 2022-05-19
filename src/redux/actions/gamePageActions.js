import { getSpecificDataRequest, getVideoSearchRequest, getGuidRequest, getGameDataRequest } from "../../api";

export const SET_SPECIFIC_DATA = "SET_SPECIFIC_DATA";
export const SET_SPECIFIC_DATA_PENDING = "SET_SPECIFIC_DATA_PENDING";
export const SET_SPECIFIC_DATA_FAILURE = "SET_SPECIFIC_DATA_FAILURE";
export const SET_VIDEO_SOURCE = "SET_VIDEO_SOURCE";
export const SET_SIMILAR_GAMES = "SET_SIMILAR_GAMES";
export const CLEAR_GAME_PAGE_STATE = "CLEAR_GAME_PAGE_STATE";

export const getSpecificDataAsync = id => {
  return async dispatch => {
    dispatch(setSpecificDataPending());
    try {
      const { data } = await getSpecificDataRequest(id);
      dispatch(setSpecificData(data));
      dispatch(getVideoSearchAsync());
      dispatch(getGameDataAsync());
    } catch (error) {
      dispatch(setSpecificDataFailure());
      // dispatch(setError(error));
    }
  };
};

export const getVideoSearchAsync = () => {
  return async (dispatch, getState) => {
    const {
      gamePageReducer: { gameDetails }
    } = getState();
    try {
      const queryTitle = gameDetails?.title.length ? gameDetails?.title : "";
      // const queryTitle = gameDetails?.title;
      console.log(queryTitle, "queryTitle 1");

      const {
        data: { results }
      } = await getVideoSearchRequest(queryTitle);

      const filteredResults = results.filter(result => {
        return result.name.match(queryTitle);
      });

      const videoSourceData =
        filteredResults[0]?.low_url || filteredResults[0]?.high_url || filteredResults[0]?.hd_url || "";

      dispatch(setVideoSource(videoSourceData));
    } catch (error) {
      // dispatch(setError());
    }
  };
};

export const getGameDataAsync = () => {
  return async (dispatch, getState) => {
    const {
      gamePageReducer: { gameDetails }
    } = getState();
    try {
      const queryTitle = gameDetails?.title?.length ? gameDetails?.title : "";
      // const queryTitle = gameDetails?.title;
      console.log(queryTitle, "queryTitle 2");

      const {
        data: { results }
      } = await getGuidRequest(queryTitle);

      // console.log(queryTitle, "queryTitle 3");

      const guid = results[0]?.guid;

      const gameData = await getGameDataRequest(guid);
      
      const gameDataResults = gameData?.data.results;
      const similarGames = gameDataResults?.similar_games;

      dispatch(setSimilarGames(similarGames));
    } catch (error) {
      // dispatch(setError());
    }
  };
};

export const setSpecificData = gameDetails => {
  return {
    type: "SET_SPECIFIC_DATA",
    payload: gameDetails
  };
};

export const setSpecificDataPending = () => {
  return {
    type: "SET_SPECIFIC_DATA_PENDING"
  };
};

export const setSpecificDataFailure = () => {
  return {
    type: "SET_SPECIFIC_DATA_FAILURE"
  };
};

export const setVideoSource = videoSourceData => {
  return {
    type: "SET_VIDEO_SOURCE",
    payload: videoSourceData
  };
};

export const setSimilarGames = similarGames => {
  return {
    type: "SET_SIMILAR_GAMES",
    payload: similarGames
  };
};

export const clearGamePageState = () => {
  return { 
    type: "CLEAR_GAME_PAGE_STATE",
  };
};
