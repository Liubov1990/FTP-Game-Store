import React, { useState as useStateMock } from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import Games from "..";
import { CategoryFieldEnum, OrderFieldEnum, PlatformFieldEnum } from "../../../redux/reducers/sortPanelReducer/types";
import { fireEvent } from "@testing-library/react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn()
}));

const initialStoreSource = {
  imagesSearchReducer: { randomImagesList: [], gamesList: [], page: 1, status: "SUCCESS" },
  sortPanelReducer: {
    platformField: PlatformFieldEnum.all,
    categoryField: CategoryFieldEnum.all,
    orderField: OrderFieldEnum.all
  }
};

jest.spyOn(console, 'warn').mockImplementation();
jest.spyOn(console, 'error').mockImplementation();

describe("Games", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render component", () => {
    renderWithWrapper(<Games />, { wrapperProps: { defaultStoreSource: initialStoreSource } });
    const elem = document.querySelector("[class*=buttonUp]") as HTMLElement;
    expect(elem).toBeInTheDocument();
  });

  test("should call window.scrollTo()", () => {
    global.scrollTo = jest.fn();
    renderWithWrapper(<Games />, { wrapperProps: { defaultStoreSource: initialStoreSource } });
    const elem = document.querySelector("[class*=buttonUp]") as HTMLElement;
    fireEvent.click(elem);
    expect(global.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "smooth" });
    expect(setState).toBeTruthy();
  });

  test("3", () => {
    (useStateMock as jest.Mock).mockImplementationOnce(() => [true, setState]);
    renderWithWrapper(<Games />, { wrapperProps: { defaultStoreSource: initialStoreSource } });
    const elem = document.querySelector("[class*=buttonUp]") as HTMLElement;
    fireEvent.scroll(elem)
    expect(elem.className).toContain("toShow");
  })
});