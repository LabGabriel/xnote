import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { XnoteProvider } from "common/context/XnoteContext";
import { INoteFields } from "pages/xnote/common/types/dialog";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import DialogEdit from "../DialogEditView";

const TITLE_DIALOG = "Edit title";
const MOCK_TITLE_NOTE = "Edit note";

const DialogEditRender: React.FC<any> = ({ submitMock, ...props }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<INoteFields>();

    const onOpen = () => setOpen(prevState => !prevState);
    const onClose = () => setOpen(prevState => !prevState);
    const onSubmit = () => "";

    return (
        <XnoteProvider>
            <DialogEdit
                {...props}
                handleSubmit={submitMock ? submitMock : handleSubmit}
                {...{ register, errors, onSubmit, reset, onClose, open}}
            />
            <button onClick={onOpen} data-testid="button-open-dialog">Open dialog</button>
        </XnoteProvider>
    )
}

afterEach(cleanup);
describe("Test component <DialogEdit />", () => {
    it("Should render the component", () => {
        const { container } = render(<DialogEditRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<DialogEditRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should not show ${TITLE_DIALOG} when dialog is close`, () => {
        const { queryByText } = render(<DialogEditRender />);

        expect(queryByText(TITLE_DIALOG)).not.toBeInTheDocument();
    });

    it(`Should show ${TITLE_DIALOG} when dialog is open`, () => {
        const { queryByText, getByTestId } = render(<DialogEditRender />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);

        expect(queryByText(TITLE_DIALOG)).toBeInTheDocument();
    });

    it(`Should show input title value ${MOCK_TITLE_NOTE}`, async () => {
        const { getByTestId } = render(<DialogEditRender title={MOCK_TITLE_NOTE} />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);

        const inputTitle = getByTestId("edit-title") as HTMLInputElement;        
        expect(inputTitle).toHaveValue(MOCK_TITLE_NOTE);
    });

    it("Should have one called click button delete", () => {
        const deleteThisNote = jest.fn();
        const { getByTestId, getByText } = render(<DialogEditRender {...{ deleteThisNote }} />);
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);

        const buttonDelete = getByText("Delete");
        userEvent.click(buttonDelete);

        expect(deleteThisNote).toHaveBeenCalledTimes(1);
    });

    it("Should show one called handleSubmit when submit", async () => {
        const handleSubmit = jest.fn();
        const { getByTestId } = render(<DialogEditRender submitMock={handleSubmit} />);

        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);

        const inputTitle = getByTestId("edit-title") as HTMLInputElement;
        userEvent.type(inputTitle, MOCK_TITLE_NOTE);

        fireEvent.submit(getByTestId("dialog-edit-save"));
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});