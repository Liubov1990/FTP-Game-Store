import { SET_SPECIFIC_DATA, SET_VIDEO_SOURCE, SET_SIMILAR_GAMES } from "../actions/gamePageActions";

const initialState = {
  specificData: {},
  videoSource: "",
  similarGames: []
};

export const gamePageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SPECIFIC_DATA:
      return { ...state, specificData: action.payload };
    case SET_VIDEO_SOURCE:
      return { ...state, videoSource: action.payload };
    case SET_SIMILAR_GAMES:
      return { ...state, similarGames: action.payload };
    default: {
      return { ...state };
    }
  }
};
