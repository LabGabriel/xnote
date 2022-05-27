import React from "react";
import { IDialogCreate } from "../common/types/dialog";
import { ButtonClose, ButtonPrimary, ButtonSecundary, Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, Input } from "./styled";

const DialogCreateView: React.FC<IDialogCreate> = ({ open, register, errors, handleSubmit, onSubmit, onClose }) => {
    const isErrors = errors.title?.type === "required";
    return (
        <>
            {open && (
                <Dialog role="dialog">
                    <DialogContent>
                        <DialogHeader>
                            <h3>Create new note</h3>
                            <ButtonClose onClick={onClose}>
                                <p>+</p>
                            </ButtonClose>
                        </DialogHeader>
                        <DialogBody>
                            <form onSubmit={handleSubmit(onSubmit)} id="createNote">
                                <Input
                                    {
                                    ...register("title",
                                        { required: true })
                                    }
                                    placeholder="Tab name"
                                    data-testid="create-title"
                                />
                                {isErrors && <span>Tab name is required</span>}
                            </form>
                        </DialogBody>

                        <DialogFooter>
                            <ButtonSecundary onClick={onClose}>Close</ButtonSecundary>
                            <ButtonPrimary form="createNote" data-testid="save">Save</ButtonPrimary>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
};

export default DialogCreateView;