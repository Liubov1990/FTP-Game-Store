import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import GameRequirements from "..";
import { GAME_REQUIREMENTS_TEST_CASES } from "./assertions";

interface IWrapperProps {
  children?: ReactElement;
  defaultStoreSource: {};
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialStoreSource = {
  gamePageReducer: { gameDetails: {} }
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

describe("GameRequirements", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { getByText } = renderWithWrapper(<GameRequirements />);
    expect(getByText(/Minimum system requirements/i)).toBeInTheDocument();
  });

  GAME_REQUIREMENTS_TEST_CASES.forEach(({ assertion, storeProps, expected }) => {
    test(assertion, () => {
      const storeSource = {
        gamePageReducer: { gameDetails: storeProps }
      };
      const { getByText } = renderWithWrapper(<GameRequirements />, {
        wrapperProps: { defaultStoreSource: storeSource }
      });
      expect(getByText(expected)).toBeInTheDocument();
    });
  });
});