import React from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import NoPage from "..";

describe("PageNotFound", () => {
  test("should render component", () => {
    const { container } =  renderWithWrapper(<NoPage />);
    expect(container.firstChild).toMatchSnapshot()
  });
});