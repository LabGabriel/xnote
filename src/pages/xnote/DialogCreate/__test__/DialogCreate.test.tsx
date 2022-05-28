import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { XnoteProvider } from "common/context/XnoteContext";
import { INoteFields } from "pages/xnote/common/types/dialog";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import DialogCreate from "../DialogCreateView";

const TITLE_DIALOG = "Create new note";
const MOCK_TITLE_NOTE = "New note";
const MOCK_MESSAGE_ERROR = "Tab name is required";

const DialogCreateRender: React.FC<any> = ({ submitMock }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<INoteFields>();

    const onOpen = () => setOpen(prevState => !prevState);
    const onClose = () => setOpen(prevState => !prevState);
    const onSubmit = () => "";

    return (
        <XnoteProvider>
            <DialogCreate
                handleSubmit={submitMock ? submitMock : handleSubmit}
                {...{ register, errors, onSubmit, reset, onClose, open }}
            />
            <button onClick={onOpen} data-testid="button-open-dialog">Open dialog</button>
        </XnoteProvider>
    )
}

afterEach(cleanup);
describe("Test component <DialogCreate />", () => {
    it("Should render the component", () => {
        const { container } = render(<DialogCreateRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<DialogCreateRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should not show ${TITLE_DIALOG} when dialog is close`, () => {
        const { queryByText } = render(<DialogCreateRender />);

        expect(queryByText(TITLE_DIALOG)).not.toBeInTheDocument();
    });

    it(`Should show ${TITLE_DIALOG} when dialog is open`, () => {
        const { queryByText, getByTestId } = render(<DialogCreateRender />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);

        expect(queryByText(TITLE_DIALOG)).toBeInTheDocument();
    });

    it(`Should show message error ${MOCK_MESSAGE_ERROR} when input title value empty`, async () => {
        const { getByTestId, getByText } = render(<DialogCreateRender />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);

        await waitFor(() => {
            const buttonSave = getByTestId("dialog-create-save") as HTMLButtonElement;
            userEvent.click(buttonSave);
        })

        expect(getByText(MOCK_MESSAGE_ERROR)).toBeInTheDocument();
    });

    it(`Should show input title value ${MOCK_TITLE_NOTE}`, () => {
        const { getByTestId } = render(<DialogCreateRender />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;        
        userEvent.click(buttonOpenDialog);

        const inputTitle = getByTestId("create-title") as HTMLInputElement;
        userEvent.type(inputTitle, MOCK_TITLE_NOTE);

        expect(inputTitle).toHaveValue(MOCK_TITLE_NOTE);
    });

    it("Should show one called handleSubmit when submit", async () => {
        const handleSubmit = jest.fn();
        const { getByTestId } = render(<DialogCreateRender submitMock={handleSubmit} />);

        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);

        const inputTitle = getByTestId("create-title") as HTMLInputElement;
        userEvent.type(inputTitle, MOCK_TITLE_NOTE);

        fireEvent.submit(getByTestId("dialog-create-save"));        
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });  
});
