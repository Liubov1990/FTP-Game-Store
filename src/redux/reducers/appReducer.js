import {SHOW_SNACKBAR_FAILURE, CLEAR_SNACKBAR_FAILURE} from "./../actions/appActions"

const initialState = {
  failureSnackbarOpen: false,
};
export const appReducer = (state = initialState, action) => {
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
