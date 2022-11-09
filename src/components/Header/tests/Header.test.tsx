import React from "react";
import { renderWithWrapper } from "../../../helpers/wrapper";
import Header from "../index";

describe("Header", () => {
  test("should match snapshot", () => {
    const { container } = renderWithWrapper(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("location pathname should lead to home page", () => {
    const { getByText } = renderWithWrapper(<Header />, { wrapperProps: { pathname: "/home-route" } });
    expect(getByText(/Back home/i)).toBeInTheDocument();
  });
});