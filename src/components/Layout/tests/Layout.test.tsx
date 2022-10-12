import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../index";

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

describe("Layout", () => {
  test("should match snapshot", () => {
    const { container } = renderWithWrapper(<Layout />, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test("should call window.scrollTo()", () => {
    window.scrollTo = jest.fn();
    renderWithWrapper(<Layout />, {});
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});