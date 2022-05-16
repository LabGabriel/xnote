import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface INoteFields {
    id_note: string;
    title: string;
    content: string;
}

export interface IDialogTitle {
    title: string;
}

export interface IDialog {
    open: boolean;
    register: UseFormRegister<INoteFields>;
    errors: any;
    handleSubmit: UseFormHandleSubmit<INoteFields>;
    onSubmit: SubmitHandler<INoteFields>;
    onClose: () => void;
}

export interface IDialogCreate extends IDialog {}
export interface IDialogEdit extends IDialog, IDialogTitle {
    deleteThisNote: () => void;
}