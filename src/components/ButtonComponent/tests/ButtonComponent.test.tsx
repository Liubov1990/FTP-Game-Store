import { render } from "@testing-library/react";
import ButtonComponent from "../index";

describe("ButtonComponent:", () => {
    test("renders the component", () => {
        const mockedProps = {value: "test button", disabled: false, padded: false};
        const { getByText, container } = render(<ButtonComponent {...mockedProps} />);
        expect(getByText(/test button/i)).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    })
})