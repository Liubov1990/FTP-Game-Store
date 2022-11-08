import React from "react";
import userEvent from "@testing-library/user-event";
import { renderWithWrapper } from "../../../helpers/wrapper";
import { clearSnackbarFailure } from "../../../redux/actions/snackbarActions";
import Snackbar from "..";

const initialStoreSource = {
  snackbarReducer: { failureSnackbarOpen: true }
};

describe("Snackbar", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { getByRole } = renderWithWrapper(<Snackbar />, { wrapperProps: { defaultStoreSource: initialStoreSource } });
    expect(getByRole(/alert/i)).toBeInTheDocument();
  });

  test("should call clearSnackbarFailure on handleClose", () => {
    const mockedDispatch = jest.fn();
    const { getByLabelText } = renderWithWrapper(<Snackbar />, {
      wrapperProps: { defaultStoreSource: initialStoreSource, defaultDispatch: mockedDispatch }
    });
    const closeSnackbarBtn = getByLabelText(/Close/i);
    expect(closeSnackbarBtn).toBeVisible();
    userEvent.click(closeSnackbarBtn);
    expect(mockedDispatch).toHaveBeenCalledWith(clearSnackbarFailure());
  });
});
