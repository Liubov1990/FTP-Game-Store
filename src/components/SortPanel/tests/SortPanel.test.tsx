import React from "react";
import { fireEvent, waitFor } from "@testing-library/react";
import SortPanel from "..";
import { getGamesListAsync, setPage } from "../../../redux/actions/imagesSearchActions";
import { resetFields } from "../../../redux/actions/sortPanelActions";
import { CategoryFieldEnum, OrderFieldEnum, PlatformFieldEnum } from "../../../redux/reducers/sortPanelReducer/types";
import { delayHelper } from "../../../helpers/delay";
import { renderWithWrapper } from "../../../helpers/wrapper";

const initialStoreSource = {
  sortPanelReducer: {
    platformField: PlatformFieldEnum.all,
    categoryField: CategoryFieldEnum.all,
    orderField: OrderFieldEnum.all
  },
  imagesSearchReducer: { status: "SUCCESS" }
};

describe("SortPanel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { getByText } = renderWithWrapper(<SortPanel />, {
      wrapperProps: {
        defaultStoreSource: initialStoreSource
      }
    });
    expect(getByText(/Featured games/i)).toBeInTheDocument();
  });

  test("should show whether reset button is 'isResetDisabled'", () => {
    const { getByText } = renderWithWrapper(<SortPanel />, {
      wrapperProps: {
        defaultStoreSource: initialStoreSource
      }
    });
    expect(getByText(/Reset/i).closest("button")).toBeDisabled();
  });

  test("should call 'peventedMultiRequest' function after 800ms after click", async () => {
    const mockedDispatch = jest.fn();
    const { getByText } = renderWithWrapper(<SortPanel />, {
      wrapperProps: { defaultStoreSource: initialStoreSource, defaultDispatch: mockedDispatch }
    });
    const sortBtn = getByText(/Sort/i).closest("button") as HTMLButtonElement;
    expect(sortBtn).toBeEnabled();
    fireEvent.click(sortBtn);
    expect(mockedDispatch).not.toHaveBeenCalled();
    await delayHelper(800);
    waitFor(() => {
      expect(mockedDispatch).toHaveBeenCalledWith(getGamesListAsync());
      expect(mockedDispatch).toHaveBeenCalledWith(setPage(1));
    });
  });

  test("should call 'resetAllFields' function", () => {
    const mockedDispatch = jest.fn();
    const { getByText } = renderWithWrapper(<SortPanel />, {
      wrapperProps: {
        defaultStoreSource: {
          ...initialStoreSource,
          sortPanelReducer: { ...initialStoreSource.sortPanelReducer, platformField: PlatformFieldEnum.browser }
        },
        defaultDispatch: mockedDispatch
      }
    });
    const resetBtn = getByText(/Reset/i).closest("button") as HTMLButtonElement;
    expect(resetBtn).toBeEnabled();
    fireEvent.click(resetBtn);
    expect(mockedDispatch).toHaveBeenCalledWith(resetFields());
    waitFor(() => {
      expect(mockedDispatch).toHaveBeenCalledWith(getGamesListAsync());
    });
    expect(mockedDispatch).toHaveBeenCalledWith(setPage(1));
  });
});
