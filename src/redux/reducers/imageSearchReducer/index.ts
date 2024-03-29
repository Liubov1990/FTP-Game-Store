import { IImagesSearchState } from "./types";
import {
  SET_IMAGES,
  SET_RANDOM_IMAGES,
  SET_PAGE,
  SET_TOTAL_PAGES,
  SET_SLIDE_DATA_PENDING,
  SET_SLIDE_DATA_FAILURE,
  CLEAR_RANDOM_IMAGES_STATE,
  ImagesSearchActionType
} from "../../actions/imagesSearchActions/types";

const initialState: IImagesSearchState = {
  gamesList: [],
  randomImagesList: [],
  page: 1,
  totalPages: 1,
  status: "NOT_ASKED"
};

export const imagesSearchReducer = (state = initialState, action: ImagesSearchActionType): IImagesSearchState => {
  const { type } = action;
  switch (type) {
    case SET_IMAGES:
      return { ...state, gamesList: action.payload, status: "SUCCESS" };
    case SET_RANDOM_IMAGES:
      return { ...state, randomImagesList: action.payload, status: "SUCCESS" };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_SLIDE_DATA_PENDING:
      return { ...state, status: "PENDING" };
    case SET_SLIDE_DATA_FAILURE:
      return { ...state, status: "FAILURE" };
    case CLEAR_RANDOM_IMAGES_STATE:
      return { ...state, randomImagesList: [], status: "PENDING" };
    default: {
      return { ...state };
    }
  }
};