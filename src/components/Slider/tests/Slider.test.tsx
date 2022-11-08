import React, { useState as useStateMock } from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import Slider from "..";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn()
}));

describe("ThumbnailSlider", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    const storeSource = {
      imagesSearchReducer: { randomImagesList: [{ screenshots: [{ id: 7 }] }], status: "SUCCESS" }
    };
    const { getByLabelText } = renderWithWrapper(<Slider />, {
      wrapperProps: { defaultStoreSource: storeSource }
    });
    const selectedItem = getByLabelText("Selected: slide item 1");
    expect(selectedItem).toBeInTheDocument();
    expect(selectedItem).toHaveClass("active");
  });

  test("should have id 'no-data-test' and set classes 'slider noData', when there is no data", () => {
    const storeSource = { imagesSearchReducer: { randomImagesList: null, status: "FAILURE" } };
    const { getByTestId } = renderWithWrapper(<Slider />, {
      wrapperProps: { defaultStoreSource: storeSource }
    });
    expect(getByTestId(/no-data-test/i)).toBeInTheDocument();
  });

  test("should set 'Pending', when component is pending", () => {
    const storeSource = { imagesSearchReducer: { randomImagesList: null, status: "PENDING" } };
    const { getByRole } = renderWithWrapper(<Slider />, { wrapperProps: { defaultStoreSource: storeSource } });
    expect(getByRole(/progressbar/i)).toBeInTheDocument();
  });
});
