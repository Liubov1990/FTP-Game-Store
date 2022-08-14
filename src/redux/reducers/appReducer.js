import {
  SHOW_SNACKBAR_FAILURE,
  CLEAR_SNACKBAR_FAILURE,
} from "./../actions/appActions"

export const initialAppState = {
  failureSnackbarOpen: false,
};
export const appReducer = (state = initialAppState, action) => {
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