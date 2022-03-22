import {
  SET_SPECIFIC_DATA,
  SET_VIDEO_SOURCE,
  SET_SIMILAR_GAMES,
  CLEAR_GAME_PAGE_STATE
} from "../actions/gamePageActions";

const initialState = {
  specificData: {},
  videoSource: "",
  similarGames: []
};

export const gamePageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SPECIFIC_DATA:
      return { ...state, specificData: payload };
    case SET_VIDEO_SOURCE:
      return { ...state, videoSource: payload };
    case SET_SIMILAR_GAMES:
      return { ...state, similarGames: payload };
    case CLEAR_GAME_PAGE_STATE:
      return { initialState };
    default: {
      return { ...state };
    }
  }
};
