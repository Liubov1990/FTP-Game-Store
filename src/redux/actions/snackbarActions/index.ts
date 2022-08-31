import {
  CLEAR_SNACKBAR_FAILURE,
  SHOW_SNACKBAR_FAILURE,
  IClearSnackbarFailureAction,
  IShowSnackbarFailureAction
} from "./types";

export function showSnackbarFailure(): IShowSnackbarFailureAction {
  return {
    type: SHOW_SNACKBAR_FAILURE
  };
}

export function clearSnackbarFailure(): IClearSnackbarFailureAction {
  return {
    type: CLEAR_SNACKBAR_FAILURE
  };
}
