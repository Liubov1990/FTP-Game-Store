import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import Header from "../index";

interface IBrowserWrapperprops {
  children?: ReactElement;
  pathname?: string;
}

interface IOptionProps {
  wrapperProps?: {
    pathname?: string;
  };
}

const BrowserWrapper = ({ children, pathname = "/" }: IBrowserWrapperprops): ReactElement => {
  return <MemoryRouter initialEntries={[{ pathname }]}>{children}</MemoryRouter>;
};

const renderWithWrapper = (ui: ReactElement, options: IOptionProps) =>
  render(ui, { wrapper: props => <BrowserWrapper {...props} {...options.wrapperProps} />, ...options });

describe("Header", () => {
  test("should match snapshot", () => {
    const { container } = renderWithWrapper(<Header />, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test("location pathname should lead to home page", () => {
    const { getByText } = renderWithWrapper(<Header />, { wrapperProps: { pathname: "/home-route" } });
    expect(getByText(/Back home/i)).toBeInTheDocument();
  });
});