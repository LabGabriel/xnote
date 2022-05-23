import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { XnoteProvider } from "common/context/XnoteContext";
import { INoteFields } from "pages/xnote/common/types/dialog";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import DialogCreate from "../DialogCreateView";

const MOCK_TITLE_NOTE = "New note";
const MOCK_MESSAGE_ERROR = "Tab name is required";

const DialogCreateRender: React.FC<any> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<INoteFields>();

    const onOpen = () => setOpen(prevState => !prevState);
    const onClose = () => setOpen(prevState => !prevState);
    const onSubmit = () => "";

    return (
        <XnoteProvider>
            <DialogCreate {...props} {...{ register, errors, handleSubmit, onSubmit, reset, onClose, open }} />
            <button onClick={onOpen} data-testid="button-open-dialog">Open dialog</button>
        </XnoteProvider>
    )
}

afterEach(cleanup);
describe("Test component <DialogCreateRender/>", () => {
    it("Should render the component", () => {
        const { container } = render(<DialogCreateRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<DialogCreateRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });    
});