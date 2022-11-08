import React from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import SimilarGames from "..";

const initialStoreSource = {
  gamePageReducer: { similarGames: [] }
};

describe("SimilarGames", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { getByText } = renderWithWrapper(<SimilarGames />, {
      wrapperProps: { defaultStoreSource: initialStoreSource }
    });
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
    const storeSource = { gamePageReducer: { similarGames: [{ name: "test-chip" }] } };
    const { getByText } = renderWithWrapper(<SimilarGames />, {
      wrapperProps: { defaultStoreSource: storeSource }
    });
    expect(getByText("test-chip")).toBeInTheDocument();
  });
});