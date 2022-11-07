import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { StoreProviderOverride } from "../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

interface IWrapperProps {
  children?: ReactElement;
  defaultStoreSource: {};
  defaultDispatch: jest.Mock;
}

const Wrapper = ({ children, defaultStoreSource, defaultDispatch = jest.fn() }: IWrapperProps): ReactElement => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(defaultStoreSource);
  store.dispatch = defaultDispatch;
  return (
    <StoreProviderOverride store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </StoreProviderOverride>
  );
};

export const renderWithWrapper = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: props => <Wrapper {...props} {...options?.wrapperProps} />, ...options });