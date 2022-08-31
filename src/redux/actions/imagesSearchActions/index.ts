// api
import { getGamesListRequest } from "../../../api";
import { getSpecificDataRequest } from "../../../api";
// store
import { AppDispatch, RootState } from "../../store";
// reducers
import { IGameInfo, IFullGameInfo } from "../../reducers/imageSearchReducer/types";
// actions
import {
  SET_IMAGES,
  SET_RANDOM_IMAGES,
  SET_PAGE,
  SET_TOTAL_PAGES,
  SET_SLIDE_DATA_PENDING,
  SET_SLIDE_DATA_FAILURE,
  CLEAR_RANDOM_IMAGES_STATE,
  ISetRandomImagesAction,
  ISetPageAction,
  ISetImagesAction,
  ISetTotalPagesAction,
  ISetSlideDataPendingAction,
  ISetSlideDataFailureAction,
  IClearRandomImagesStateAction
} from "./../imagesSearchActions/types";
import { showSnackbarFailure } from "../snackbarActions";
// constants
import { pageElementsAmount } from "../../../constants/pagination";

export const getGamesListAsync = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {
      sortPanelReducer: { platformField, categoryField, orderField }
    } = getState();
    dispatch(setSlideDataPending());
    try {
      const { data } = await getGamesListRequest({ platformField, categoryField, orderField });

      const listElementsCount = data.length;
      const pagesCount = Math.ceil(listElementsCount / pageElementsAmount);

      dispatch(getSpecificImageAsync(data));
      dispatch(setImages(data));
      dispatch(setTotalPages(pagesCount));
    } catch (error) {
      dispatch(setSlideDataFailure());
      dispatch(showSnackbarFailure());
    }
  };
};

export const getSpecificImageAsync = (data: IGameInfo[]) => {
  return async (dispatch: AppDispatch) => {
    const getRandomImage = async () => {
      const randomImage = Math.floor(Math.random() * data.length - 1);
      const randomImageId = data[randomImage]?.id;
      try {
        const { data: imageData } = await getSpecificDataRequest(randomImageId);

        if (imageData?.screenshots?.length) {
          return imageData
        }
      } catch (error) {
        dispatch(setSlideDataFailure());
      }
    };
    const randomList = await (await Promise.all([...Array(4).keys()].map(async () => getRandomImage()))).filter(Boolean);
    dispatch(setRandomImages(randomList));
  };
};

export const setImages = (imagesData: IGameInfo[]): ISetImagesAction => {
  return {
    type: SET_IMAGES,
    payload: imagesData
  };
};

export const setRandomImages = (imagesRandomData: IFullGameInfo[]): ISetRandomImagesAction => {
  return {
    type: SET_RANDOM_IMAGES,
    payload: imagesRandomData
  };
};

export const setPage = (pageData: number): ISetPageAction => {
  return {
    type: SET_PAGE,
    payload: pageData
  };
};

export const setTotalPages = (totalPagesData: number ): ISetTotalPagesAction => {
  return {
    type: SET_TOTAL_PAGES,
    payload: totalPagesData
  };
};

export const setSlideDataPending = (): ISetSlideDataPendingAction => {
  return {
    type: SET_SLIDE_DATA_PENDING
  };
};

export const setSlideDataFailure = (): ISetSlideDataFailureAction => {
  return {
    type: SET_SLIDE_DATA_FAILURE
  };
};

export const clearRandomImagesState = (): IClearRandomImagesStateAction => {
  return {
    type: CLEAR_RANDOM_IMAGES_STATE,
  };
};