import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import GamesGrid from "..";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe("GamesGrid", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const storeSource = { imagesSearchReducer: { gamesList: [], status: "SUCCESS" } };
    const { getByTestId } = renderWithWrapper(<GamesGrid />, {
      wrapperProps: {
        defaultStoreSource: storeSource
      }
    });
    expect(getByTestId("grid-test")).toBeInTheDocument();
  });

  test("should render failure message", () => {
    const storeSource = { imagesSearchReducer: { gamesList: [], status: "FAILURE" } };
    const { getByText } = renderWithWrapper(<GamesGrid />, {
      wrapperProps: {
        defaultStoreSource: storeSource
      }
    });
    expect(getByText(/Something went wrong. Please, try again or wisit our site later./i)).toBeInTheDocument();
  });

  test("should redirect to 'GamePage' with mocked 'id: 7' on click", () => {
    const storeSource = {
      imagesSearchReducer: { gamesList: [{ title: "title-test", id: 7 }], page: 1, status: "SUCCESS" }
    };
    const { getByText } = renderWithWrapper(<GamesGrid />, {
      wrapperProps: {
        defaultStoreSource: storeSource
      }
    });
    fireEvent.click(getByText("title-test"));
    expect(mockHistoryPush).toHaveBeenCalledWith("/games/7");
  });
});