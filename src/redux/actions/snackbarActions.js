export const SHOW_SNACKBAR_FAILURE = "SHOW_SNACKBAR_FAILURE";
export const CLEAR_SNACKBAR_FAILURE = "CLEAR_SNACKBAR_FAILURE";

export function showSnackbarFailure(message) {
  return { type: SHOW_SNACKBAR_FAILURE, payload: message }
};

export function clearSnackbarFailure() {
  return { type: CLEAR_SNACKBAR_FAILURE };
};