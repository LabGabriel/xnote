import { cleanup, render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Footer from "../FooterView";

const FooterRender = ({ amountNote = 0 }) => {
    const onDeleteAllNote = jest.fn();
    const onDialogAbout = jest.fn();
    return (
        <Footer {...{ onDeleteAllNote, onDialogAbout, amountNote }} />
    )
}

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
});