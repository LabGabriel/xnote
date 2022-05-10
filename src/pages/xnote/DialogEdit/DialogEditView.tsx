import React from "react";
import { ButtonClose, ButtonPrimary, ButtonSecundary, Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, Input } from "./styled";

const DialogEditView: React.FC<any> = ({ open, register, errors, handleSubmit, onSubmit, onClose, title }) => {
    const isErrors = errors.title?.type === "required";
    return (
        <Dialog role="dialog" open={open}>
            <DialogContent>
                <DialogHeader>
                    <h3>Create edit title</h3>
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
                        />
                        {isErrors && <span>Tab name is required</span>}
                    </form>
                </DialogBody>

                <DialogFooter>
                    <ButtonSecundary onClick={onClose}>Close</ButtonSecundary>
                    <ButtonPrimary form="editNote">Save</ButtonPrimary>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default DialogEditView;