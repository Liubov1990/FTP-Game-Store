import React from "react";
import userEvent from "@testing-library/user-event";
import { renderWithWrapper } from "../../../helpers/wrapper";
import { setPage } from "../../../redux/actions/imagesSearchActions";
import PaginationComponent from "..";

const initialStoreSource = {
  imagesSearchReducer: { page: 1, totalPages: 1 }
};

describe("GamePageReducer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { container } = renderWithWrapper(<PaginationComponent />, {
      wrapperProps: { defaultStoreSource: initialStoreSource }
    });
    const paginationComponent = container.querySelector(".MuiPagination-root");
    expect(paginationComponent).toBeInTheDocument();
  });

  test("should set page on onPageChange", () => {
    const mockedDispatch = jest.fn();
    const { getByText } = renderWithWrapper(<PaginationComponent />, {
      wrapperProps: { defaultStoreSource: initialStoreSource, defaultDispatch: mockedDispatch }
    });
    const changePageBtn = getByText("1");
    expect(changePageBtn).toBeEnabled();
    userEvent.click(changePageBtn);
    expect(mockedDispatch).toHaveBeenCalledWith(setPage(1));
  });
});