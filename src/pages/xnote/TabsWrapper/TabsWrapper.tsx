import { XnoteContext } from "common/context/XnoteContext";
import React, { useContext } from "react";
import TabsView from "./TabsWrapperView";

const TabsWrapper: React.FC = () => {
    const { noteContent } = useContext(XnoteContext);

    const createTab = () => {
      
    }

    
    return <TabsView {... { noteContent, createTab }} />
}

export default TabsWrapper;