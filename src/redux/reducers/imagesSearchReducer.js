import { SET_IMAGES, SET_RANDOM_IMAGES, SET_PAGE, SET_TOTAL_PAGES, SET_SLIDE_DATA_LOADING, SET_SLIDE_DATA_FAILURE, CLEAR_RANDOM_IMAGES_STATE } from "../actions/imagesSearchActions";

const initialState = {
  gamesList: [],
  randomImagesList: [],
  page: 1,
  totalPages: 1,
  status: "LOADING",
};

export const imagesSearchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IMAGES:
      return { ...state, gamesList: payload };
    case SET_RANDOM_IMAGES:
      return { ...state, randomImagesList: payload, status: "SUCCESS" };
    case SET_PAGE:
      return { ...state, page: payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: payload };
    case SET_SLIDE_DATA_LOADING:
      return { ...state, status: "LOADING" };
    case SET_SLIDE_DATA_FAILURE:
      return { ...state, status: "FAILURE" };
    case CLEAR_RANDOM_IMAGES_STATE:
      return { ...state, randomImagesList: [], status: "LOADING" };
    default: {
      return { ...state };
    }
  }
};
