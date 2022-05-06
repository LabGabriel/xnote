import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogBody, DialogFooter, ButtonPrimary, ButtonClose, ButtonSecundary, Input } from "./styled";
import { IDialog } from "./types/types.component";

const DialogView: React.FC<IDialog> = ({ onClose, onSave, onChange, open }) => {
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
                    <Input type="text" placeholder="Tab name" onChange={onChange} />
                </DialogBody>

                <DialogFooter>
                    <ButtonSecundary onClick={onClose}>Close</ButtonSecundary>
                    <ButtonPrimary onClick={onSave}>Save</ButtonPrimary>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default DialogView;