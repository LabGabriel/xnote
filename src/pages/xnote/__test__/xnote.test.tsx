import { cleanup, render } from "@testing-library/react";
import { XnoteProvider } from "common/context/XnoteContext";
import ReactDOM from "react-dom";
import Xnote from "..";

const XnoteRender: React.FC = () => {
    return (
        <XnoteProvider>
            <Xnote />
        </XnoteProvider>
    )
}

afterEach(cleanup);
describe("Test component <Xnote />", () => {
    it("Should render the component", () => {
        const { container } = render(<XnoteRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<XnoteRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});