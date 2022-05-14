import { XnoteContext } from "common/context/XnoteContext";
import useLocalStorage from "common/hooks/useLocalStorage";
import React, { ChangeEvent, memo, useCallback, useContext } from "react";
import { INoteFields } from "../common/types/dialog";
import TabsView from "./TabsView";
import ReactDOM from "react-dom";

const Tabs: React.FC = () => {
    const { setIsOpenDialogCreate, setIsOpenDialogEdit, setNoteEditDefaultValue, noteContent, setNoteContent } = useContext(XnoteContext);    
    const [lastSelectedTab, setLastSelectedTab] = useLocalStorage<string>("xnote_tab", "0");
    const [, setStorage] = useLocalStorage<INoteFields[]>("xnote", "[]");

    const openDialogCreate = () => {
        setIsOpenDialogCreate(prevState => !prevState);
    }

    const openDialogEdit = useCallback((id_note: string, title: string) => {
        setNoteEditDefaultValue({ id_note, title });
        setIsOpenDialogEdit(prevState => !prevState);
    }, [setIsOpenDialogEdit, setNoteEditDefaultValue])

    const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const storage = JSON.parse(localStorage.getItem("xnote")!);
        const { value } = e.target;
        const { id } = e.target.dataset;

        const callBackNote = (note: INoteFields) => note.id_note === id;
        const [note] = storage.filter(callBackNote);
        const indexNote = storage.findIndex(callBackNote);

        note.content = value;
        storage.splice(indexNote, 1, note);

        ReactDOM.unstable_batchedUpdates(() => {
            setStorage(storage);
            setTimeout(() => setNoteContent(storage), 500);
        })        
    }

    const onSelect = (index: number) => setLastSelectedTab(index.toString());

    return <TabsView storage={noteContent}{... { openDialogCreate, openDialogEdit, handleContent, onSelect, lastSelectedTab }} />
}

export default memo(Tabs);