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

    it("Should show dialog display none when open equal false", () => {
        const { container } = render(<DialogCreateRender />);
        const dialog = container.querySelector("[role=dialog]") as HTMLDivElement;
    
        expect(dialog).toHaveStyle({ display: "none" });
    });
    
    it("Should show dialog display block when open equal true", () => {
        const { container, getByTestId } = render(<DialogCreateRender />);
        const dialog = container.querySelector("[role=dialog]") as HTMLDivElement;
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);
    
        expect(dialog).toHaveStyle({ display: "flex" });
    });
    
    it(`Should show message error ${MOCK_MESSAGE_ERROR} when input title value empty`, async () => {
        const { getByTestId, getByText } = render(<DialogCreateRender />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);
    
        await waitFor(() => {
            const buttonSave = getByText(/save/i) as HTMLButtonElement;
            userEvent.click(buttonSave);
        })
        
        expect(getByText(MOCK_MESSAGE_ERROR)).toBeInTheDocument();
    });
    
    it(`Should show input title value ${MOCK_TITLE_NOTE}`, () => {
        const { container, getByTestId } = render(<DialogCreateRender />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);
    
        const inputTitle = container.querySelector("[name=title]") as HTMLInputElement;
        userEvent.type(inputTitle, MOCK_TITLE_NOTE);
    
        expect(inputTitle).toHaveValue(MOCK_TITLE_NOTE);
    });
});