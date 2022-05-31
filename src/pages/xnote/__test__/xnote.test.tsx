import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { XnoteProvider } from "common/context/XnoteContext";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import Xnote from "..";
import createNote from "../common/util/createNote";

const MOCK_TITLE_NOTE = "New tab";
const MOCK_CONTENT = "My content";

const XnoteRender: React.FC = () => {
    return (
        <XnoteProvider>
            <ToastContainer />
            <Xnote />
        </XnoteProvider>
    )
}

afterEach(cleanup);
describe("Test component <Xnote />", () => {
    it("Should render the component", () => {
        const { container } = render(<XnoteRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<XnoteRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show ${MOCK_TITLE_NOTE} and ${MOCK_CONTENT} when create tab`, async () => {
        const { container, getByTestId, getByText, findByText } = render(<XnoteRender />);
        const buttonOpenDialogCreate = getByTestId("button-open-dialog-create") as HTMLButtonElement;
        userEvent.click(buttonOpenDialogCreate);

        const inputTitle = getByTestId("create-title") as HTMLInputElement;
        userEvent.type(inputTitle, MOCK_TITLE_NOTE);

        const buttonSave = getByTestId("dialog-create-save") as HTMLButtonElement;
        await waitFor(() => userEvent.click(buttonSave));

        const toastMessage = await findByText("Create tab");
        const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
        userEvent.type(textarea, MOCK_CONTENT);
        
        expect(toastMessage).toBeInTheDocument();
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveValue(MOCK_CONTENT);
        expect(getByText(MOCK_TITLE_NOTE)).toBeInTheDocument();
    });
    
    it(`Should show ${MOCK_TITLE_NOTE} edited when edit tab`, async () => {
        localStorage.setItem("xnote", JSON.stringify([createNote(MOCK_TITLE_NOTE)]));        
        const { getByTestId, getByText, findByText } = render(<XnoteRender />);

        const tab = getByText(MOCK_TITLE_NOTE);
        userEvent.dblClick(tab);

        const inputTitle = getByTestId("dialog-edit-title") as HTMLInputElement;        
        userEvent.type(inputTitle, " edited");

        const buttonSave = getByTestId("dialog-edit-save") as HTMLButtonElement;
        await waitFor(() => userEvent.click(buttonSave));

        const toastMessage = await findByText("Note edited");

        expect(toastMessage).toBeInTheDocument();
        expect(getByText(`${MOCK_TITLE_NOTE} edited`)).toBeInTheDocument();
    });

    it("Should show button delete all disabled true when there is only one tab", async () => {
        localStorage.setItem("xnote", JSON.stringify([createNote(MOCK_TITLE_NOTE)]));        
        const { getByTestId } = render(<XnoteRender />);        
        const buttonDeleteAll = getByTestId("delete-all");

        expect(buttonDeleteAll).toBeDisabled();
    });

    it("Should show button delete all disabled true when don't have notes", async () => {
        const { getByTestId } = render(<XnoteRender />);        
        const buttonDeleteAll = getByTestId("delete-all");

        expect(buttonDeleteAll).toBeDisabled();
    });  

    it("Delete all note", async () => {
        localStorage.setItem("xnote", JSON.stringify([createNote(MOCK_TITLE_NOTE), createNote(MOCK_TITLE_NOTE)]));        
        const { container, getByText, getByTestId, findByText } = render(<XnoteRender />);
        
        const buttonDeleteAll = getByTestId("delete-all");
        await waitFor(() => userEvent.click(buttonDeleteAll));

        const toastMessage = await findByText("Delete all notes");
        const textarea = container.querySelector("textarea") as HTMLTextAreaElement;

        expect(toastMessage).toBeInTheDocument();
        expect(textarea).not.toBeInTheDocument();
        expect(getByText("Add new note")).toBeInTheDocument();
    });
});