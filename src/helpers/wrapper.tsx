import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { StoreProviderOverride } from "../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

interface IWrapperProps {
  children?: ReactElement;
  defaultStoreSource: Record<string, any>;
  defaultDispatch?: jest.Mock;
  pathname?: string;
}

const Wrapper = ({ children, defaultStoreSource = {}, defaultDispatch = jest.fn(), pathname = "/" }: IWrapperProps): ReactElement => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(defaultStoreSource);
  store.dispatch = defaultDispatch;
  return (
    <StoreProviderOverride store={store}>
      <MemoryRouter initialEntries={[pathname && { pathname }]}>{children}</MemoryRouter>
    </StoreProviderOverride>
  );
};

export const renderWithWrapper = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: props => <Wrapper {...props} {...options?.wrapperProps} />, ...options });