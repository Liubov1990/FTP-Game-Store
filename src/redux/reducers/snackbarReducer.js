import {
  SHOW_SNACKBAR_FAILURE,
  CLEAR_SNACKBAR_FAILURE,
} from "../actions/snackbarActions"

export const initialAppState = {
  failureSnackbarOpen: false,
};
export const snackbarReducer = (state = initialAppState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_SNACKBAR_FAILURE:
      return {
        ...state,
        failureSnackbarOpen: true,
      };
    case CLEAR_SNACKBAR_FAILURE:
      return {
        ...state,
        failureSnackbarOpen: false,
      };
    default:
      return state;
  }
};