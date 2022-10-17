import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import PaginationComponent from "..";
import { setPage } from "../../../redux/actions/imagesSearchActions";

interface wrapperProps {
  children?: ReactElement;
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  imagesSearchReducer: { page: 1, totalPages: 1 }
});
store.dispatch = jest.fn();

const Wrapper = ({ children }: wrapperProps): ReactElement => {
  return (
    <StoreProviderOverride store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </StoreProviderOverride>
  );
};

describe("GamePageReducer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { container } = render(<PaginationComponent />, { wrapper: Wrapper });
    const paginationComponent = container.querySelector(".MuiPagination-root");
    expect(paginationComponent).toBeInTheDocument();
  });

  test("should set page on onPageChange", () => {
    const { getByText } = render(<PaginationComponent />, { wrapper: Wrapper });
    const changePageBtn = getByText("1");
    expect(changePageBtn).not.toBeDisabled();
    userEvent.click(changePageBtn);
    expect(store.dispatch).toHaveBeenCalledWith(setPage(1));
  });
});
