import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import TextArea from "../TextArea";

const MOCK_DEFAULT_VALUE = "Hello, World";
const MOCK_VALUE = "New text her";
const MOCK_DATA_ID = "123456";

afterEach(cleanup);
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

    it(`Should show default value ${MOCK_DEFAULT_VALUE}`, () => {
        const { queryByText } = render(<TextArea dataId={MOCK_DATA_ID} defaultValue={MOCK_DEFAULT_VALUE} />);
        expect(queryByText(MOCK_DEFAULT_VALUE)).toBeInTheDocument();
    });

    it(`Should show dataId equal ${MOCK_DATA_ID}`, () => {
        const { container } = render(<TextArea dataId={MOCK_DATA_ID} />);
        const textarea = container.querySelector("textarea") as HTMLTextAreaElement;        
              
        expect(textarea.dataset.id).toEqual(MOCK_DATA_ID);
    });

    it(`Should show value ${MOCK_VALUE}`, () => {
        const { container } = render(<TextArea dataId={MOCK_DATA_ID} />);
        const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
        
        userEvent.type(textarea!, MOCK_VALUE);
        expect(textarea).toHaveValue(MOCK_VALUE);
    });

    it(`Should show onChange called ${MOCK_VALUE.length}`, () => {
        const onChange = jest.fn();
        const { container } = render(<TextArea dataId={MOCK_DATA_ID} onChange={onChange}/>);
        const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
        
        userEvent.type(textarea!, MOCK_VALUE);
        expect(onChange).toHaveBeenCalledTimes(MOCK_VALUE.length);
    });
});