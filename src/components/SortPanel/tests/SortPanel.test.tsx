import React, { ReactElement } from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import SortPanel from "..";
import { getGamesListAsync, setPage } from "../../../redux/actions/imagesSearchActions";
import { resetFields } from "../../../redux/actions/sortPanelActions";
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

const delayHelper = (delay: number): Promise<void> =>
  new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });

const renderWithWrapper = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: props => <Wrapper {...props} {...options?.wrapperProps} />, ...options });

describe("SortPanel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { getByText } = renderWithWrapper(<SortPanel />);
    expect(getByText(/Featured games/i)).toBeInTheDocument();
  });

  test("should show whether reset button is 'isResetDisabled'", () => {
    const { getByText } = renderWithWrapper(<SortPanel />);
    expect(getByText(/Reset/i).closest("button")).toBeDisabled();
  });

  test("should call 'peventedMultiRequest' function after 800ms after click", async () => {
    const mockedDispatch = jest.fn();
    const { getByText } = renderWithWrapper(<SortPanel />, {
      wrapperProps: { defaultDispatch: mockedDispatch }
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
        defaultDispatch: mockedDispatch,
        defaultStoreSource: {
          ...initialStoreSource,
          sortPanelReducer: { ...initialStoreSource.sortPanelReducer, platformField: PlatformFieldEnum.browser }
        }
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
