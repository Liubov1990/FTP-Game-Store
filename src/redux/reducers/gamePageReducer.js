import {
  SET_SPECIFIC_DATA,
  SET_SPECIFIC_DATA_PENDING,
  SET_SPECIFIC_DATA_FAILURE,
  SET_VIDEO_SOURCE,
  SET_SIMILAR_GAMES,
  CLEAR_GAME_PAGE_STATE
} from "../actions/gamePageActions";

const initialState = {
  gameDetails: {},
  videoSource: "",
  similarGames: [],
  status: "NOT_ASKED"
};

export const gamePageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SPECIFIC_DATA:
      return { ...state, gameDetails: payload, status: "SUCCESS" };
    case SET_SPECIFIC_DATA_PENDING:
      return { ...state, status: "PENDING" };
    case SET_SPECIFIC_DATA_FAILURE:
      return { ...state, status: "FAILURE" };
    case SET_VIDEO_SOURCE:
      return { ...state, videoSource: payload };
    case SET_SIMILAR_GAMES:
      return { ...state, similarGames: payload };
    case CLEAR_GAME_PAGE_STATE:
      return { ...initialState };
    default: {
      return { ...state };
    }
  }
};
