import React from "react";
import GameRequirements from "..";
import { GAME_REQUIREMENTS_TEST_CASES } from "./assertions";
import { renderWithWrapper } from "../../../helpers/wrapper";

const initialStoreSource = {
  gamePageReducer: { gameDetails: {} }
};

describe("GameRequirements", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const { getByText } = renderWithWrapper(<GameRequirements />, {
      wrapperProps: { defaultStoreSource: initialStoreSource }
    });
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