import { XnoteContext } from "common/context/XnoteContext";
import useLocalStorage from "common/hooks/useLocalStorage";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IDialogTitle, INoteFields } from "../common/types/types.dialog";
import createNote from "../common/util/createNote";
import DialogCreateView from "./DialogCreateView";

const DialogCreate: React.FC = () => {
    const { isOpenDialogNewNote, setIsOpenDialogNewNote } = useContext(XnoteContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<INoteFields>();
    const [storage, setStorage] = useLocalStorage<string | any[]>("xnote", "[]");

    const onClose = () => {
        setIsOpenDialogNewNote(prevState => !prevState);
        reset();
    };

    const onSubmit = (data: IDialogTitle) => {
        const { title } = data;
        setStorage(() => [...storage, createNote(title)]);
        onClose();
    };
    
    return (
        <DialogCreateView
            {...{ register, errors, handleSubmit, onSubmit, onClose }}
            open={isOpenDialogNewNote}
        />
    )
}

export default DialogCreate;