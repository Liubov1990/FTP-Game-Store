import { IGameInfo, IFullGameInfo }  from "../../reducers/imageSearchReducer/types"

export const SET_IMAGES = "SET_IMAGES";
export const SET_RANDOM_IMAGES = "SET_RANDOM_IMAGES";
export const SET_PAGE = "SET_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SET_SLIDE_DATA_PENDING = "SET_SLIDE_DATA_PENDING";
export const SET_SLIDE_DATA_FAILURE = "SET_SLIDE_DATA_FAILURE";
export const CLEAR_RANDOM_IMAGES_STATE = "CLEAR_RANDOM_IMAGES_STATE";

export interface ISetImagesAction {
  type: typeof SET_IMAGES;
  payload: IGameInfo[];
}

export interface ISetRandomImagesAction {
  type: typeof SET_RANDOM_IMAGES;
  payload: IFullGameInfo[];
}

export interface ISetPageAction {
  type: typeof SET_PAGE;
  payload: number;
}

export interface ISetTotalPagesAction {
  type: typeof SET_TOTAL_PAGES;
  payload: number;
}

export interface ISetSlideDataPendingAction {
  type: typeof SET_SLIDE_DATA_PENDING;
}

export interface ISetSlideDataFailureAction {
  type: typeof SET_SLIDE_DATA_FAILURE;
}

export interface IClearRandomImagesStateAction {
  type: typeof CLEAR_RANDOM_IMAGES_STATE;
}
export type ImagesSearchActionType =
  | ISetImagesAction
  | ISetRandomImagesAction
  | ISetPageAction
  | ISetTotalPagesAction
  | ISetSlideDataPendingAction
  | ISetSlideDataPendingAction
  | ISetSlideDataFailureAction
  | IClearRandomImagesStateAction;