import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { XnoteProvider } from "common/context/XnoteContext";
import { INoteFields } from "pages/xnote/common/types/dialog";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import DialogEdit from "../DialogEditView";

const MOCK_TITLE_NOTE = "Edit note";

const DialogEditRender: React.FC<any> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<INoteFields>();

    const onOpen = () => setOpen(prevState => !prevState);
    const onClose = () => setOpen(prevState => !prevState);
    const onSubmit = () => "";

    return (
        <XnoteProvider>
            <DialogEdit {...props} {...{ register, errors, handleSubmit, onSubmit, reset, onClose, open }} />
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

    it("Should show dialog display none when open equal false", () => {
        const { container } = render(<DialogEditRender />);
        const dialog = container.querySelector("[role=dialog]") as HTMLDivElement;
    
        expect(dialog).toHaveStyle({ display: "none" });
    });
    
    it("Should show dialog display block when open equal true", () => {
        const { container, getByTestId } = render(<DialogEditRender />);
        const dialog = container.querySelector("[role=dialog]") as HTMLDivElement;
        const buttonOpenDialog = getByTestId("button-open-dialog") as HTMLButtonElement;
        userEvent.click(buttonOpenDialog);
    
        expect(dialog).toHaveStyle({ display: "flex" });
    });
    
    it(`Should show input title value ${MOCK_TITLE_NOTE}`, () => {
        const { container } = render(<DialogEditRender title={MOCK_TITLE_NOTE} />);
        const inputTitle = container.querySelector("[name=title]") as HTMLInputElement;
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
});