import React from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import Layout from "../index";

describe("Layout", () => {
  test("should match snapshot", () => {
    const { container } = renderWithWrapper(<Layout />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("should call window.scrollTo()", () => {
    window.scrollTo = jest.fn();
    renderWithWrapper(<Layout />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});