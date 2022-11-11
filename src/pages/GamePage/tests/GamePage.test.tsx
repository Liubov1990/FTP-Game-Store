import React from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import GamePage from "..";

describe("GamePage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const storeSource = { gamePageReducer: { gameDetails: { title: "test-title" }, status: "SUCCESS" } };
    const { getByText } = renderWithWrapper(<GamePage />, { wrapperProps: { defaultStoreSource: storeSource } });
    expect(getByText(/Short description/i)).toBeInTheDocument();
  });

  test("should return 'Error", () => {
    const storeSource = { gamePageReducer: { gameDetails: {}, status: "FAILURE" } };
    renderWithWrapper(<GamePage />, { wrapperProps: { defaultStoreSource: storeSource } });
    const errElement = document.querySelector(".makeStyles-error-53") as HTMLElement;
    expect(errElement).toBeInTheDocument();
  });

  test("should return no content", () => {
    const storeSource = { gamePageReducer: { gameDetails: {}, status: "NOT_ASKED" } };
    renderWithWrapper(<GamePage />, { wrapperProps: { defaultStoreSource: storeSource } });
    const errElement = document.querySelector(".makeStyles-error-53") as HTMLElement;
    expect(errElement).not.toBeInTheDocument();
  });
});