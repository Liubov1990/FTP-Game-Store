import { CategoryFieldEnum, ISortPanelState, OrderFieldEnum, PlatformFieldEnum } from "./types";
import {
  SET_PLATFORM_VALUE,
  SET_CATEGORY_VALUE,
  SET_ORDER_VALUE,
  RESET_FIELDS,
  SortPanelActionType
} from "../../actions/sortPanelActions/types";

const initialState: ISortPanelState = {
  platformField: PlatformFieldEnum.all,
  categoryField: CategoryFieldEnum.all,
  orderField: OrderFieldEnum.all
};

export const sortPanelReducer = (state = initialState, action: SortPanelActionType): ISortPanelState => {
  const { type } = action;
  switch (type) {
    case SET_PLATFORM_VALUE:
      return { ...state, platformField: action.payload };
    case SET_CATEGORY_VALUE:
      return { ...state, categoryField: action.payload };
    case SET_ORDER_VALUE:
      return { ...state, orderField: action.payload };
    case RESET_FIELDS:
      return initialState;
    default: {
      return { ...state };
    }
  }
};