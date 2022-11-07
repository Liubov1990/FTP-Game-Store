import React, { ReactElement } from "react";
import { fireEvent, render } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import SortPanelDropdown from "..";
import { CategoryFieldEnum, OrderFieldEnum, PlatformFieldEnum } from "../../../redux/reducers/sortPanelReducer/types";

interface IWrapperProps {
  children?: ReactElement;
  defaultStoreSource: {};
  defaultDispatch: jest.Mock;
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialStoreSource = {
  sortPanelReducer: {
    platformField: PlatformFieldEnum.all,
    categoryField: CategoryFieldEnum.all,
    orderField: OrderFieldEnum.all
  },
  imagesSearchReducer: { status: "SUCCESS" }
};

const Wrapper = ({
  children,
  defaultStoreSource = initialStoreSource,
  defaultDispatch = jest.fn()
}: IWrapperProps): ReactElement => {
  const store = mockStore(defaultStoreSource);
  store.dispatch = defaultDispatch;
  return (
    <StoreProviderOverride store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </StoreProviderOverride>
  );
};

const renderWithWrapper = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: props => <Wrapper {...props} {...options?.wrapperProps} />, ...options });

describe("SortPanelDropdown", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call 'onChange' function", () => {
    const mockedDispatch = jest.fn();
    renderWithWrapper(<SortPanelDropdown />, {
      wrapperProps: {
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