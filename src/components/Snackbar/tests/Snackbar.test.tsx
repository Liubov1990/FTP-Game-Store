import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Snackbar from "..";
import userEvent from "@testing-library/user-event";
import { clearSnackbarFailure } from "../../../redux/actions/snackbarActions";

interface IWrapperProps {
  children?: ReactElement;
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  snackbarReducer: { failureSnackbarOpen: true }
});
store.dispatch = jest.fn();

const Wrapper = ({ children }: IWrapperProps): ReactElement => {
  return (
    <StoreProviderOverride store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </StoreProviderOverride>
  );
};
describe("Snackbar", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { getByRole } = render(<Snackbar />, { wrapper: Wrapper });
    expect(getByRole(/alert/i)).toBeInTheDocument();
  });
  
  test("should call clearSnackbarFailure on handleClose", () => {
    const { getByLabelText } = render(<Snackbar />, { wrapper: Wrapper });
    const closeSnackbarBtn = getByLabelText(/Close/i);
    expect(closeSnackbarBtn).toBeVisible();
    userEvent.click(closeSnackbarBtn);
    expect(store.dispatch).toHaveBeenCalledWith(clearSnackbarFailure());
  });
});