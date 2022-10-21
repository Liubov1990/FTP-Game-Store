import React, { ReactElement, useState as useStateMock } from "react";
import { render } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import ThumbnailSlider from "..";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn()
}));

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

describe("ThumbnailSlider", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    (useStateMock as jest.Mock).mockImplementation(() => [[{ id: 1666203868497, image: "some-test-img" }], setState]);
    const storeSource = { gamePageReducer: { gameDetails: { screenshots: [{ image: "test-img" }] } } };
    const { getByLabelText } = renderWithWrapper(<ThumbnailSlider />, {
      wrapperProps: { defaultStoreSource: storeSource }
    });
    expect(getByLabelText("slide item 1")).toBeInTheDocument();
  });

  test("should set thumbnail as default background image", () => {
    const { getByTestId } = renderWithWrapper(<ThumbnailSlider />);
    expect(getByTestId(/default-background-image/i)).toBeInTheDocument();
  });

  test("should not set initial screenshots if 'gameDetails.screenshots' prop is empty", () => {
    const storeSource = { gamePageReducer: { gameDetails: { screenshots: [] } } };
    renderWithWrapper(<ThumbnailSlider />, { wrapperProps: { defaultStoreSource: storeSource } });
    expect(setState).toBeCalledTimes(0);
  });
});