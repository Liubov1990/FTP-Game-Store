import { getGamesListRequest } from "../../api";
import { getSpecificDataRequest } from "../../api";
import { pageElementsAmount } from "../../constants/pagination";
import { showFailureSnackbar } from "./appActions";

export const SET_IMAGES = "SET_IMAGES";
export const SET_RANDOM_IMAGES = "SET_RANDOM_IMAGES";
export const SET_PAGE = "SET_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

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
    }
  };
};

export const getSpecificImageAsync = data => {
  return async dispatch => {
    let randomImagesList = {};

    const getRandomImage = async () => {
      const randomImage = Math.floor(Math.random() * data.length - 1);
      const randomImageId = data[randomImage].id;
      try {
        const { data: imageData } = await getSpecificDataRequest(randomImageId);
        
        if (imageData.screenshots.length) {
          return (randomImagesList = {
            ...randomImagesList,
            [imageData.id]: imageData
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    const promises = [...Array(4).keys()].map(async () => getRandomImage());
    for await (const res of promises) {
    }
    dispatch(setRandomImages(randomImagesList));
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
