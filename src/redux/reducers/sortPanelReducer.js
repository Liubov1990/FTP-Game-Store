import { SET_PLATFORM_VALUE, SET_CATEGORY_VALUE, SET_ORDER_VALUE } from "../actions/sortPanelActions";

const initialState = {
  platformField: "all",
  categoryField: "",
  orderField: ""
};

export const sortPanelReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PLATFORM_VALUE:
      return { ...state, platformField: action.payload };
    case SET_CATEGORY_VALUE:
      return { ...state, categoryField: action.payload };
    case SET_ORDER_VALUE:
      return { ...state, orderField: action.payload };
    default: {
      return { ...state };
    }
  }
};
