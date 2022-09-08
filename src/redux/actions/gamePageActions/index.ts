// api
import { getSpecificDataRequest, getGuidRequest, getGameDataRequest } from "../../../api";
// store
import { AppDispatch, RootState } from "../../store";
// reducers
import { ISimilarGames } from "../../reducers/gamePageReducer/types";
import { IFullGameInfo } from "../../reducers/imageSearchReducer/types";
// actions
import {
  SET_SPECIFIC_DATA,
  SET_SPECIFIC_DATA_PENDING,
  SET_SPECIFIC_DATA_FAILURE,
  SET_SIMILAR_GAMES,
  CLEAR_GAME_PAGE_STATE,
  ISetSpecificDataPendingAction,
  ISetSpecificDataFailureAction,
  IClearGamePageStateAction,
  ISetSpecificDataAction,
  ISetSimilarGamesAction,
} from "../../actions/gamePageActions/types"

export const getSpecificDataAsync = (id: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setSpecificDataPending());
    try {
      const { data } = await getSpecificDataRequest(id);

      dispatch(setSpecificData(data));
      dispatch(getGameDataAsync());
    } catch (error) {
      dispatch(setSpecificDataFailure());
    }
  };
};

export const getGameDataAsync = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {
      gamePageReducer: { gameDetails }
    } = getState();
    try {
      const queryTitle = gameDetails?.title?.length ? gameDetails?.title : "";
      const {
        data: { results }
      } = await getGuidRequest(queryTitle);
      const guid: string = results[0]?.guid;      
      const gameData = await getGameDataRequest(guid);
      const gameDataResults = gameData?.data.results;
      const similarGames = gameDataResults?.similar_games;

      dispatch(setSimilarGames(similarGames));
    } catch (error) {
    }
  };
};

export const setSpecificData = (gameDetails: IFullGameInfo): ISetSpecificDataAction => {
  return {
    type: SET_SPECIFIC_DATA,
    payload: gameDetails
  };
};

export const setSpecificDataPending = (): ISetSpecificDataPendingAction => {
  return {
    type: SET_SPECIFIC_DATA_PENDING
  };
};

export const setSpecificDataFailure = (): ISetSpecificDataFailureAction => {
  return {
    type: SET_SPECIFIC_DATA_FAILURE
  };
};

export const setSimilarGames = (similarGames: ISimilarGames[]): ISetSimilarGamesAction => {
  return {
    type: SET_SIMILAR_GAMES,
    payload: similarGames
  };
};

export const clearGamePageState = (): IClearGamePageStateAction => {
  return { 
    type: CLEAR_GAME_PAGE_STATE,
  };
};