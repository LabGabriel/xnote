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

    it("Should show one tab", () => {
        const { getByText } = render(<TabRender storage={MOCK_TAB} />);
        const tab = getByText(MOCK_TAB.shift()?.title!);
    
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
        const { getByText } = render(<TabRender {...{ openDialogEdit }} storage={MOCK_TAB} />);
        const tab = getByText(MOCK_TAB.shift()?.title!) as HTMLLIElement;
        userEvent.dblClick(tab);
    
        expect(openDialogEdit).toHaveBeenCalledTimes(1);
    });
    
    it(`Should have ${MOCK_TAB_CONTENT.length} called onChange textarea handleContent`, () => {
        const handleContent = jest.fn();
        const { container } = render(<TabRender {...{ handleContent }} storage={MOCK_TAB} />);
        const textArea = container.querySelector("textarea") as HTMLTextAreaElement;
        userEvent.type(textArea, MOCK_TAB_CONTENT);
    
        expect(handleContent).toHaveBeenCalledTimes(MOCK_TAB_CONTENT.length);
    });      
});