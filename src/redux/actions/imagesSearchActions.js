import { getGamesListRequest } from "../../api";
import { getSpecificDataRequest } from "../../api";
import { pageElementsAmount } from "../../constants/pagination";
import { showFailureSnackbar } from "./appActions";

export const SET_IMAGES = "SET_IMAGES";
export const SET_RANDOM_IMAGES = "SET_RANDOM_IMAGES";
export const SET_PAGE = "SET_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SET_SLIDE_DATA_LOADING = "SET_SLIDE_DATA_LOADING";
export const SET_SLIDE_DATA_FAILURE = "SET_SLIDE_DATA_FAILURE";
export const CLEAR_RANDOM_IMAGES_STATE = "CLEAR_RANDOM_IMAGES_STATE";

export const getGamesListAsync = () => {
  return async (dispatch, getState) => {
    const {
      sortPanelReducer: { platformField, categoryField, orderField }
    } = getState();
    try {
      const { data } = await getGamesListRequest({ platformField, categoryField, orderField });

      const listElementsCount = data.length;
      const pagesCount = Math.ceil(listElementsCount / pageElementsAmount);

      dispatch(getSpecificImageAsync(data));
      dispatch(setImages(data));
      dispatch(setTotalPages(pagesCount));
    } catch (error) {
      dispatch(showFailureSnackbar("Failure!"));
      // dispatch(setError(error));
    }
  };
};

export const getSpecificImageAsync = data => {
  return async dispatch => {
    const getRandomImage = async () => {
      const randomImage = Math.floor(Math.random() * data.length - 1);
      const randomImageId = data[randomImage]?.id;
      try {
        const { data: imageData } = await getSpecificDataRequest(randomImageId);

        if (imageData?.screenshots?.length) {
          return imageData
        }
      } catch (error) {
        // dispatch(setError(error));
      }
    };

    const randomList = await (await Promise.all([...Array(4).keys()].map(async () => getRandomImage()))).filter(Boolean);
    dispatch(setRandomImages(randomList));
  };
};

export const setImages = imagesData => {
  return {
    type: "SET_IMAGES",
    payload: imagesData
  };
};

export const setRandomImages = imagesRandomData => {
  return {
    type: "SET_RANDOM_IMAGES",
    payload: imagesRandomData
  };
};

export const setPage = pageData => {
  return {
    type: "SET_PAGE",
    payload: pageData
  };
};

export const setTotalPages = totalPagesData => {
  return {
    type: "SET_TOTAL_PAGES",
    payload: totalPagesData
  };
};

export const setSlideDataLoading = () => {
  return {
    type: "SET_SLIDE_DATA_LOADING"
  };
};

export const setSlideDataFailure = () => {
  return {
    type: "SET_SLIDE_DATA_FAILURE"
  };
};

export const clearRandomImagesState = () => {
  return { 
    type: "CLEAR_RANDOM_IMAGES_STATE",
  };
};