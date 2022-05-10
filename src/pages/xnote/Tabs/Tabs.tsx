import { XnoteContext } from "common/context/XnoteContext";
import React, { memo, useCallback, useContext } from "react";
import TabsView from "./TabsView";

const Tabs: React.FC = () => {
    const { setIsOpenDialogCreate, setIsOpenDialogEdit, setNoteEditDefaultValue } = useContext(XnoteContext);
    const storage = JSON.parse(localStorage.getItem("xnote")!);

    const openDialogCreate = () => {
        setIsOpenDialogCreate(prevState => !prevState);
    }

    const openDialogEdit = useCallback((id_note: string, title: string) => {
        setNoteEditDefaultValue({ id_note, title });
        setIsOpenDialogEdit(prevState => !prevState);
    }, [setIsOpenDialogEdit, setNoteEditDefaultValue])

    return <TabsView {... { storage, openDialogCreate, openDialogEdit }} />
}

export default memo(Tabs);