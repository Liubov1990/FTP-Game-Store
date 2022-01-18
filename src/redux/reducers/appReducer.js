export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case "SNACKBAR_FAILURE":
      return {
        ...state,
        failureSnackbarOpen: true,
      };
    case "SNACKBAR_CLEAR":
      return {
        ...state,
        successSnackbarOpen: false,
        failureSnackbarOpen: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false
      };
    default:
      return state;
  }
};