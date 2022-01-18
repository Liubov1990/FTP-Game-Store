import { SET_IMAGES, SET_RANDOM_IMAGES, SET_PAGE, SET_TOTAL_PAGES } from "../actions/imagesSearchActions";

const initialState = {
  gamesList: [],
  randomImagesList: {},
  page: 1,
  totalPages: 1,
};

export const imagesSearchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IMAGES:
      return { ...state, gamesList: payload };
    case SET_RANDOM_IMAGES:
      return { ...state, randomImagesList: payload };
    case SET_PAGE:
      return { ...state, page: payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: payload };
    default: {
      return { ...state };
    }
  }
};
