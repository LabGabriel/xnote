import React from "react";
import { IDialogEdit } from "../common/types/dialog";
import {
    ButtonClose,
    ButtonDelete,
    ButtonPrimary,
    Dialog,
    DialogBody,
    DialogContent,
    DialogFooter,
    DialogHeader,
    Input
} from "./styled";

const DialogEditView: React.FC<IDialogEdit> = (props) => {
    const { open, register, errors, handleSubmit, onSubmit, onClose, title, deleteThisNote } = props;
    const isErrors = errors.title?.type === "required";
    return (
        <>
            {open && (
                <Dialog role="dialog">
                    <DialogContent>
                        <DialogHeader>
                            <h3>Edit title</h3>
                            <ButtonClose onClick={onClose}>
                                <p>+</p>
                            </ButtonClose>
                        </DialogHeader>
                        <DialogBody>
                            <form onSubmit={handleSubmit(onSubmit)} id="editNote">
                                <Input
                                    {
                                    ...register("title",
                                        { required: true })
                                    }
                                    defaultValue={title}
                                    placeholder="Tab name"
                                    data-testid="edit-title"
                                />
                                {isErrors && <span>Tab name is required</span>}
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <ButtonDelete onClick={deleteThisNote}>Delete</ButtonDelete>
                            <ButtonPrimary form="editNote" data-testid="dialog-edit-save">Save</ButtonPrimary>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
};

export default DialogEditView;