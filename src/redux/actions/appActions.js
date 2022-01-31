export const SHOW_SNACKBAR_FAILURE = "SHOW_SNACKBAR_FAILURE";
export const CLEAR_SNACKBAR_FAILURE = "CLEAR_SNACKBAR";

export function showFailureSnackbar(message) {
  return{ type: "SHOW_SNACKBAR_FAILURE", payload: message }
};

export function clearSnackbar(){
  return { type: "CLEAR_SNACKBAR" };
};