import React from "react";
import GlanceGameInfo from "..";
import { renderWithWrapper } from "../../../helpers/wrapper";

const initialStoreSource = {
  gamePageReducer: { gameDetails: {}, similarGames: [], status: "NOT_ASKED" }
};

describe("GlanceGameInfo", () => {
  test("should render component", () => {
    const { getByText } = renderWithWrapper(<GlanceGameInfo />, {
      wrapperProps: { defaultStoreSource: initialStoreSource }
    });
    expect(getByText(/Short description:/i)).toBeInTheDocument();
  });
});