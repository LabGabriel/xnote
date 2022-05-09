import React from "react";
import { ButtonClose, ButtonPrimary, ButtonSecundary, Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, Input } from "./styled";
import { IDialog } from "./types/types.component";

const DialogCreateView: React.FC<IDialog> = ({ open, register, errors, handleSubmit, onSubmit, onClose }) => {
    const isErrors = errors.title?.type === "required";
    return (
        <Dialog role="dialog" open={open}>
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
                        />
                        {isErrors && <span>Tab name is required</span>}
                    </form>
                </DialogBody>

                <DialogFooter>
                    <ButtonSecundary onClick={onClose}>Close</ButtonSecundary>
                    <ButtonPrimary form="createNote">Save</ButtonPrimary>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default DialogCreateView;