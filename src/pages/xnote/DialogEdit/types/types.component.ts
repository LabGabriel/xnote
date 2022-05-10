import { INoteFields } from "pages/xnote/common/types/types.dialog";
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IDialog {
    open: boolean;
    register: UseFormRegister<INoteFields>;
    errors: any;
    handleSubmit: UseFormHandleSubmit<INoteFields>;
    onSubmit: SubmitHandler<INoteFields>;
    onClose: () => void;
}