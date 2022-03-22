import { getSpecificDataRequest, getVideoSearchRequest, getGuidRequest, getGameDataRequest } from "../../api";

export const SET_SPECIFIC_DATA = "SET_SPECIFIC_DATA";
export const SET_VIDEO_SOURCE = "SET_VIDEO_SOURCE";
export const SET_SIMILAR_GAMES = "SET_SIMILAR_GAMES";
export const CLEAR_GAME_PAGE_STATE = "CLEAR_GAME_PAGE_STATE";

export const getSpecificDataAsync = id => {
  return async dispatch => {
    try {
      const { data } = await getSpecificDataRequest(id);
      dispatch(setSpecificData(data));
      dispatch(getVideoSearchAsync());
      dispatch(getGameDataAsync());
    } catch (error) {
      // dispatch(setError(error));
    }
  };
};

export const getVideoSearchAsync = () => {
  return async (dispatch, getState) => {
    const {
      gamePageReducer: { specificData }
    } = getState();
    try {
      const queryTitle = specificData.title;

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
      gamePageReducer: { specificData }
    } = getState();
    try {
      const queryTitle = specificData.title;
      const {
        data: { results }
      } = await getGuidRequest(queryTitle);

      console.log("queryTitle", queryTitle);

      const guid = results[0].guid;

      const gameData = await getGameDataRequest(guid);
      
      const gameDataResults = gameData.data.results;
      const similarGames = gameDataResults.similar_games;

      dispatch(setSimilarGames(similarGames));
    } catch (error) {
      // dispatch(setError());
    }
  };
};

export const setSpecificData = specificData => {
  return {
    type: "SET_SPECIFIC_DATA",
    payload: specificData
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
