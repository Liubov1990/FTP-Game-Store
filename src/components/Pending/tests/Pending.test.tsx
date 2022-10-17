import React from "react";
import { render } from "@testing-library/react";
import Pending from "..";

describe("Pending", () => {
  test("should match snapshot", () => {
    const { container } = render(<Pending />);
    expect(container.firstChild).toMatchSnapshot();
  });
});