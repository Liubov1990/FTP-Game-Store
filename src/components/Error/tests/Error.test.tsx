import { render } from "@testing-library/react";
import Error from "../index";

describe("Error:", () => {
  test("renders the component", () => {
    const { container } = render(<Error />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
