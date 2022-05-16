import { XnoteContext } from "common/context/XnoteContext";
import useLocalStorage from "common/hooks/useLocalStorage";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { IDialogTitle, INoteFields } from "../common/types/dialog";
import DialogEditView from "./DialogEditView";

const DialogEdit: React.FC = () => {
    const { isOpenDialogEdit, setIsOpenDialogEdit, noteEditDefaultValue, setNoteContent } = useContext(XnoteContext);
    const { id_note, title } = noteEditDefaultValue;
    const { register, formState: { errors }, handleSubmit, reset } = useForm<INoteFields>();
    const [, setStorage] = useLocalStorage<INoteFields[]>("xnote", "[]");

    const onClose = () => {
        setIsOpenDialogEdit(prevState => !prevState);
        reset();
    };

    const onSubmit = (data: IDialogTitle) => {
        const storage: INoteFields[] = JSON.parse(localStorage.getItem("xnote")!);
        const { title } = data;
        const filterIdNote = (note: INoteFields) => note.id_note === id_note;
        const [note] = storage.filter(filterIdNote);
        const indexNote = storage.findIndex(filterIdNote);
        note.title = title;
        storage.splice(indexNote, 1, note);

        ReactDOM.unstable_batchedUpdates(() => {
            setStorage(storage);
            setNoteContent(storage);
        })
        onClose();
    };

    const deleteThisNote = () => {
        const storage: INoteFields[] = JSON.parse(localStorage.getItem("xnote")!);        
        const filterIdNote = (note: INoteFields) => note.id_note === id_note;
        const indexNote = storage.findIndex(filterIdNote);
        storage.splice(indexNote, 1);
        
        ReactDOM.unstable_batchedUpdates(() => {
            setStorage(storage);
            setNoteContent(storage);
        })
        onClose();
    };

    return (
        <DialogEditView
            {...{ register, errors, handleSubmit, onSubmit, onClose, title, deleteThisNote }}
            open={isOpenDialogEdit}
        />
    )
}

export default DialogEdit;