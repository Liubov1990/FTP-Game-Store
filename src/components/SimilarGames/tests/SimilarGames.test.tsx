import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import SimilarGames from "..";

interface IWrapperProps {
  children?: ReactElement;
  defaultStoreSource: {};
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialStoreSource = {
  gamePageReducer: { similarGames: [] }
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

describe("SimilarGames", () => {
  test("should render component", () => {
    const { getByText } = renderWithWrapper(<SimilarGames />);
    expect(getByText(/Similar games/i)).toBeInTheDocument();
  });

  test("should render component, when there are no similar games", () => {
    const storeSource = { gamePageReducer: { similarGames: null } };
    const { getByText } = renderWithWrapper(<SimilarGames />, {
      wrapperProps: { defaultStoreSource: storeSource }
    });
    expect(getByText(/No games in the list/i)).toBeInTheDocument();
  });

  test("should render chip element", () => {
    const storeSource = { gamePageReducer: { similarGames: [{name: "test-chip"}] }};
    const { getByText } = renderWithWrapper(<SimilarGames />, {
        wrapperProps: { defaultStoreSource: storeSource }
      });
    expect(getByText("test-chip")).toBeInTheDocument();
  });
});