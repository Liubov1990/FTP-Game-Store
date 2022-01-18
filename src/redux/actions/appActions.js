export const showFailureSnackbar = message => {
  return dispatch => {
    dispatch({ type: "SNACKBAR_FAILURE", message });
  };
};

export const clearSnackbar = () => {
  return dispatch => {
    dispatch({ type: "SNACKBAR_CLEAR" });
  };
};