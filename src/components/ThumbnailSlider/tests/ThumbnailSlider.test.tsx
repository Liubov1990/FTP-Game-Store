import React, { useState as useStateMock } from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import ThumbnailSlider from "..";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn()
}));

const initialStoreSource = {
  gamePageReducer: { gameDetails: {} }
};

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
    const { getByTestId } = renderWithWrapper(<ThumbnailSlider />, {
      wrapperProps: { defaultStoreSource: initialStoreSource }
    });
    expect(getByTestId(/default-background-image/i)).toBeInTheDocument();
  });

  test("should not set initial screenshots if 'gameDetails.screenshots' prop is empty", () => {
    const storeSource = { gamePageReducer: { gameDetails: { screenshots: [] } } };
    renderWithWrapper(<ThumbnailSlider />, { wrapperProps: { defaultStoreSource: storeSource } });
    expect(setState).toBeCalledTimes(0);
  });
});