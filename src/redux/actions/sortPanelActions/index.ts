import { CategoryFieldEnum, OrderFieldEnum, PlatformFieldEnum } from "../../reducers/sortPanelReducer/types";
import {
  SET_PLATFORM_VALUE,
  SET_CATEGORY_VALUE,
  SET_ORDER_VALUE,
  RESET_FIELDS,
  ISetPlatformField,
  ISetCategoryField,
  ISetOrderField
} from "../../actions/sortPanelActions/types";

export function setPlatformField(platformValue: PlatformFieldEnum): ISetPlatformField {
  return {
    type: SET_PLATFORM_VALUE,
    payload: platformValue
  };
}

export function setCategoryField(categoryValue: CategoryFieldEnum): ISetCategoryField {
  return {
    type: SET_CATEGORY_VALUE,
    payload: categoryValue
  };
}

export function setOrderField(orderValue: OrderFieldEnum): ISetOrderField {
  return {
    type: SET_ORDER_VALUE,
    payload: orderValue
  };
}

export function resetFields() {
  return {
    type: RESET_FIELDS
  };
}
