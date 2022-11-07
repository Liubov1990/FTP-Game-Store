import React from "react";
import { fireEvent } from "@testing-library/react";
import SortPanelDropdown from "..";
import { CategoryFieldEnum, OrderFieldEnum, PlatformFieldEnum } from "../../../redux/reducers/sortPanelReducer/types";
import { renderWithWrapper } from "../../../helpers/wrapper";

const initialStoreSource = {
  sortPanelReducer: {
    platformField: PlatformFieldEnum.all,
    categoryField: CategoryFieldEnum.all,
    orderField: OrderFieldEnum.all
  },
  imagesSearchReducer: { status: "SUCCESS" }
};

describe("SortPanelDropdown", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call 'onChange' function", () => {
    const mockedDispatch = jest.fn();
    renderWithWrapper(<SortPanelDropdown />, {
      wrapperProps: {
        defaultStoreSource: initialStoreSource,
        defaultDispatch: mockedDispatch
      }
    });
    const selectElement = document.querySelector(".MuiSelect-nativeInput") as HTMLSelectElement;
    fireEvent.change(selectElement, {
      target: {
        value: "browser"
      }
    });
    expect(mockedDispatch).toBeCalledTimes(1);
  });
});