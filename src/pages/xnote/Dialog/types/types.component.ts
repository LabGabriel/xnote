import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IDialog {
    onClose: MouseEventHandler<HTMLButtonElement>;
    onSave: MouseEventHandler<HTMLButtonElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    open: boolean;
}