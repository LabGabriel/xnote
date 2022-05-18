import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import Footer from "../FooterView";

const FooterRender: React.FC<any> = ({ onDeleteAllNote, onDialogAbout, amountNote = 0 }) => (
    <Footer {...{ onDeleteAllNote, onDialogAbout, amountNote }} />
);

afterEach(cleanup);
describe("Test component <Footer/>", () => {
    it("Should render the component", () => {
        const { container } = render(<FooterRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<FooterRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Should show button delete all disabled equal true when amountNotes less than 1", () => {
        const { getByRole } = render(<FooterRender />);
        const buttonDeleteAll = getByRole("button", { name: /detele all/i }) as HTMLButtonElement;

        expect(buttonDeleteAll).toBeDisabled();
    });

    it("Should show button delete all disabled equal false when amountNotes greater than 1", () => {
        const { getByRole } = render(<FooterRender amountNote={2} />);
        const buttonDeleteAll = getByRole("button", { name: /detele all/i }) as HTMLButtonElement;

        expect(buttonDeleteAll).not.toBeDisabled();
    });

    it("Should show button delete all onClick called 1", () => {
        const onDeleteAllNote = jest.fn();
        const { getByRole } = render(<FooterRender amountNote={2} {...{ onDeleteAllNote }} />);

        const buttonDeleteAll = getByRole("button", { name: /detele all/i }) as HTMLButtonElement;
        userEvent.click(buttonDeleteAll);

        expect(onDeleteAllNote).toHaveBeenCalledTimes(1);
    });

    it("Should show button about onClick called 1", () => {
        const onDialogAbout = jest.fn();
        const { getByRole } = render(<FooterRender amountNote={2} {...{ onDialogAbout }} />);

        const buttonAbout = getByRole("button", { name: /about/i }) as HTMLButtonElement;
        userEvent.click(buttonAbout);

        expect(onDialogAbout).toHaveBeenCalledTimes(1);
    });
});