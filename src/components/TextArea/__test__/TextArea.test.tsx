import { render } from "@testing-library/react";
import TextArea from "../TextArea";
import ReactDOM from "react-dom";

const MOCK_DATA_ID = "123456";

describe("Test component <TextArea/>", () => {
    it("Should render the component", () => {
        const { container } = render(<TextArea dataId={MOCK_DATA_ID} />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<TextArea dataId={MOCK_DATA_ID} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});