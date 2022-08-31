export const SHOW_SNACKBAR_FAILURE = "SHOW_SNACKBAR_FAILURE";
export const CLEAR_SNACKBAR_FAILURE = "CLEAR_SNACKBAR_FAILURE";

export interface IShowSnackbarFailureAction {
  type: typeof SHOW_SNACKBAR_FAILURE;
}

export interface IClearSnackbarFailureAction {
  type: typeof CLEAR_SNACKBAR_FAILURE;
}

export type SnackbarActionType = IShowSnackbarFailureAction | IClearSnackbarFailureAction;