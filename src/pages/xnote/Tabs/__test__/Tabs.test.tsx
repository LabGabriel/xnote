import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { XnoteProvider } from "common/context/XnoteContext";
import createNote from "pages/xnote/common/util/createNote";
import ReactDOM from "react-dom";
import Tabs from "../TabsView";

const MOCK_TAB_TITLE = "Mock title";
const MOCK_TAB_CONTENT = "My content";
const MOCK_TAB = [createNote(MOCK_TAB_TITLE)];

const TabRender: React.FC<any> = ({ storage = [], ...rest }) => {
    return (
        <XnoteProvider>
            <Tabs storage={storage} {...rest} />
        </XnoteProvider>
    )
}

afterEach(cleanup);
describe("Test component <Tab />", () => {
    it("Should render the component", () => {
        const { container } = render(<TabRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<TabRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });    
});