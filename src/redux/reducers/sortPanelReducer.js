import { SET_PLATFORM_VALUE, SET_CATEGORY_VALUE, SET_ORDER_VALUE, RESET_FIELDS } from "../actions/sortPanelActions";

const initialState = {
  platformField: "all",
  categoryField: "all",
  orderField: "all",
};

export const sortPanelReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PLATFORM_VALUE:
      return { ...state, platformField: payload };
    case SET_CATEGORY_VALUE:
      return { ...state, categoryField: payload };
    case SET_ORDER_VALUE:
      return { ...state, orderField: payload };
    case RESET_FIELDS:
      return initialState;
    default: {
      return { ...state };
    }
  }
};