import { IGamePageState } from "./types";
import {
  SET_SPECIFIC_DATA,
  SET_SPECIFIC_DATA_PENDING,
  SET_SPECIFIC_DATA_FAILURE,
  SET_SIMILAR_GAMES,
  CLEAR_GAME_PAGE_STATE,
  GamePageActionType
} from "../../actions/gamePageActions/types"

const initialState: IGamePageState = {
  gameDetails: {},
  similarGames: [],
  status: "NOT_ASKED"
};

export const gamePageReducer = (state = initialState, action: GamePageActionType): IGamePageState => {
  const { type } = action;
  switch (type) {
    case SET_SPECIFIC_DATA:
      return { ...state, gameDetails: action.payload, status: "SUCCESS" };
    case SET_SPECIFIC_DATA_PENDING:
      return { ...state, status: "PENDING" };
    case SET_SPECIFIC_DATA_FAILURE:
      return { ...state, status: "FAILURE" };
    case SET_SIMILAR_GAMES:
      return { ...state, similarGames: action.payload };
    case CLEAR_GAME_PAGE_STATE:
      return { ...initialState };
    default: {
      return { ...state };
    }
  }
};