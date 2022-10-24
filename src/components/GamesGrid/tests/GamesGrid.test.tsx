import React, { ReactElement } from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import GamesGrid from "..";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

interface IWrapperProps {
  children?: ReactElement;
  defaultStoreSource: {};
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialStoreSource = {
  imagesSearchReducer: { gamesList: [], page: 1, status: "NOT_ASKED" }
};

const Wrapper = ({ children, defaultStoreSource = initialStoreSource }: IWrapperProps): ReactElement => {
  const store = mockStore(defaultStoreSource);
  store.dispatch = jest.fn();
  return (
    <StoreProviderOverride store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </StoreProviderOverride>
  );
};

const renderWithWrapper = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: props => <Wrapper {...props} {...options?.wrapperProps} />, ...options });

describe("GamesGrid", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const storeSource = { imagesSearchReducer: { gamesList: [], status: "SUCCESS" } };
    const { getByTestId } = renderWithWrapper(<GamesGrid />, {
      wrapperProps: {
        defaultStoreSource: storeSource
      }
    });
    expect(getByTestId("grid-test")).toBeInTheDocument();
  });

  test("should render failure message", () => {
    const storeSource = { imagesSearchReducer: { gamesList: [], status: "FAILURE" } };
    const { getByText } = renderWithWrapper(<GamesGrid />, {
      wrapperProps: {
        defaultStoreSource: storeSource
      }
    });
    expect(getByText(/Something went wrong. Please, try again or wisit our site later./i)).toBeInTheDocument();
  });

  test("should redirect to 'GamePage' with mocked 'id: 7' on click", () => {
    const storeSource = { imagesSearchReducer: { gamesList: [{title: "title-test", id: 7}], page: 1, status: "SUCCESS" } };
    const { getByText } = renderWithWrapper(<GamesGrid />, {
      wrapperProps: {
        defaultStoreSource: storeSource
      }
    });
    fireEvent.click(getByText("title-test"));
    expect(mockHistoryPush).toHaveBeenCalledWith("/games/7");
  });
});