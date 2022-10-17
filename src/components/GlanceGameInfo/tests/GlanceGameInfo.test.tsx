import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { StoreProviderOverride } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import GameGlanceInfo from "..";

interface wrapperProps {
  children?: ReactElement;
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  gamePageReducer: { gameDetails: {}, similarGames: [], status: "NOT_ASKED" }
});
store.dispatch = jest.fn();

const Wrapper = ({ children }: wrapperProps): ReactElement => {
  return (
    <StoreProviderOverride store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </StoreProviderOverride>
  );
};

describe("GlanceGameInfo", () => {
  test("should render component", () => {
    const { getByText } = render(<GameGlanceInfo />, { wrapper: Wrapper });
    expect(getByText(/Short description:/i)).toBeInTheDocument();
  });
});