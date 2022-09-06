import { CategoryFieldEnum, OrderFieldEnum, PlatformFieldEnum } from "../../reducers/sortPanelReducer/types";

export const SET_PLATFORM_VALUE = "SET_PLATFORM_VALUE";
export const SET_CATEGORY_VALUE = "SET_CATEGORY_VALUE";
export const SET_ORDER_VALUE = "SET_ORDER_VALUE";
export const RESET_FIELDS = "RESET_FIELDS";

export interface ISetPlatformField {
  type: typeof SET_PLATFORM_VALUE;
  payload: PlatformFieldEnum;
}

export interface ISetCategoryField {
  type: typeof SET_CATEGORY_VALUE;
  payload: CategoryFieldEnum;
}

export interface ISetOrderField {
  type: typeof SET_ORDER_VALUE;
  payload: OrderFieldEnum;
}

export interface IResetFields {
  type: typeof RESET_FIELDS;
}

export enum SortingFieldsEnum {
  setCategoryField = "setCategoryField",
  setPlatformField = "setPlatformField",
  setOrderField = "setOrderField", 
}

export type SortPanelActionType = ISetPlatformField | ISetCategoryField | ISetOrderField | IResetFields;
