import React from "react";
import GameDescription from "..";
import { renderWithWrapper } from "../../../helpers/wrapper";

const initialStoreSource = {
  gamePageReducer: { gameDetails: { title: "test-game-title" }, similarGames: [], status: "NOT_ASKED" }
};

describe("GamePageReducer", () => {
  test("should render component", () => {
    const { getByText } = renderWithWrapper(<GameDescription />, {
      wrapperProps: { defaultStoreSource: initialStoreSource }
    });
    const gameDescriptionComponent = getByText("test-game-title");
    expect(gameDescriptionComponent).toBeInTheDocument();
  });
});