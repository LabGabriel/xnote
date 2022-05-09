import { XnoteContext } from "common/context/XnoteContext";
import React, { memo, useContext } from "react";
import TabsView from "./TabsWrapperView";

const TabsWrapper: React.FC = () => {
    const { setIsOpenDialogNewNote } = useContext(XnoteContext);    
    const storage = JSON.parse(localStorage.getItem("xnote")!);
    
    const openDialogNewNote = () => {
        setIsOpenDialogNewNote(prevState => !prevState);
    }
    
    return <TabsView {... { storage, openDialogNewNote }} />
}

export default memo(TabsWrapper);