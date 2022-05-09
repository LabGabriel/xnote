import { XnoteContext } from "common/context/XnoteContext";
import React, { memo, useContext } from "react";
import TabsView from "./TabsView";

const Tabs: React.FC = () => {
    const { setIsOpenDialogNewNote } = useContext(XnoteContext);    
    const storage = JSON.parse(localStorage.getItem("xnote")!);
    
    const openDialogNewNote = () => {
        setIsOpenDialogNewNote(prevState => !prevState);
    }
    
    return <TabsView {... { storage, openDialogNewNote }} />
}

export default memo(Tabs);