import { ISimilarGames} from "../../reducers/gamePageReducer/types"
import { IFullGameInfo } from "../../reducers/imageSearchReducer/types";

export const SET_SPECIFIC_DATA = "SET_SPECIFIC_DATA";
export const SET_SPECIFIC_DATA_PENDING = "SET_SPECIFIC_DATA_PENDING";
export const SET_SPECIFIC_DATA_FAILURE = "SET_SPECIFIC_DATA_FAILURE";
export const SET_SIMILAR_GAMES = "SET_SIMILAR_GAMES";
export const CLEAR_GAME_PAGE_STATE = "CLEAR_GAME_PAGE_STATE";

export interface ISetSpecificDataAction {
    type: typeof SET_SPECIFIC_DATA;
    payload: IFullGameInfo;
}

export interface ISetSpecificDataPendingAction {
    type: typeof SET_SPECIFIC_DATA_PENDING;
}

export interface ISetSpecificDataFailureAction {
    type: typeof SET_SPECIFIC_DATA_FAILURE;
}

export interface ISetSimilarGamesAction {
    type: typeof SET_SIMILAR_GAMES;
    payload: ISimilarGames[];
}

export interface IClearGamePageStateAction {
    type: typeof CLEAR_GAME_PAGE_STATE;
}

export type GamePageActionType = ISetSpecificDataAction | ISetSpecificDataPendingAction | ISetSpecificDataFailureAction | ISetSimilarGamesAction | IClearGamePageStateAction;