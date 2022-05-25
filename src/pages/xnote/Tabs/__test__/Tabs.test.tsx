import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { XnoteProvider } from "common/context/XnoteContext";
import createNote from "pages/xnote/common/util/createNote";
import ReactDOM from "react-dom";
import localStorageMock from "util/test/localStorageMock";
import Tabs from "../TabsView";

const MOCK_TAB_TITLE = "Mock title";
const MOCK_TAB_CONTENT = "My content";

const TabRender: React.FC<any> = ({ storage = [], ...rest }) => {
    return (
        <XnoteProvider>
            <Tabs storage={storage} {...rest} />
        </XnoteProvider>
    )
}

beforeEach(() => localStorageMock());
afterEach(cleanup);
afterAll(jest.clearAllMocks);

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

    it("Should show one tab", () => {
        const { getByText } = render(<TabRender storage={[createNote(MOCK_TAB_TITLE)]} />);
        const tab = getByText(MOCK_TAB_TITLE);

        expect(tab).toBeInTheDocument();
    });

    it("Should have one called click button openDialogCreate", () => {
        const openDialogCreate = jest.fn();
        const { getByText } = render(<TabRender {...{ openDialogCreate }} />);
        const buttonPlus = getByText("+") as HTMLButtonElement;
        userEvent.click(buttonPlus);

        expect(openDialogCreate).toHaveBeenCalledTimes(1);
    });

    it("Should have one called click button openDialogEdit", () => {
        const openDialogEdit = jest.fn();
        const { getByText } = render(<TabRender {...{ openDialogEdit }} storage={[createNote(MOCK_TAB_TITLE)]} />);
        const tab = getByText(MOCK_TAB_TITLE) as HTMLLIElement;
        userEvent.dblClick(tab);

        expect(openDialogEdit).toHaveBeenCalledTimes(1);
    });

    it(`Should have ${MOCK_TAB_CONTENT.length} called onChange textarea handleContent`, () => {
        const handleContent = jest.fn();
        const { container } = render(<TabRender {...{ handleContent }} storage={[createNote(MOCK_TAB_TITLE)]} />);
        const textArea = container.querySelector("textarea") as HTMLTextAreaElement;
        userEvent.type(textArea, MOCK_TAB_CONTENT);

        expect(handleContent).toHaveBeenCalledTimes(MOCK_TAB_CONTENT.length);
    });

    it("Should have one called localStorage setItem and getItem", () => {
        const { container } = render(<TabRender storage={[createNote(MOCK_TAB_TITLE)]} />);
        const textArea = container.querySelector("textarea") as HTMLTextAreaElement;
        userEvent.type(textArea, MOCK_TAB_CONTENT);

        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    });

    it("Should show localStorage getItem xnote", () => {
        const { container } = render(<TabRender storage={[createNote(MOCK_TAB_TITLE)]} />);
        const textArea = container.querySelector("textarea") as HTMLTextAreaElement;
        userEvent.type(textArea, MOCK_TAB_CONTENT);

        expect(localStorage.getItem).toHaveBeenCalledWith("xnote");
    });
});