import useLocalStorage from "common/hooks/useLocalStorage";
import { INoteFields } from "pages/xnote/common/types/dialog/index";
import React, { createContext, useState } from "react";
import { IXnoteContext } from "./types/types.component";

export const XnoteContext = createContext({} as IXnoteContext);

export const XnoteProvider: React.FC = ({ children }) => {
    const [storage] = useLocalStorage<INoteFields[]>("xnote", "[]");
    const [noteContent, setNoteContent] = useState<INoteFields[]>(storage);
    
    const [isOpenDialogCreate, setIsOpenDialogCreate] = useState<boolean>(false);
    const [isOpenDialogEdit, setIsOpenDialogEdit] = useState<boolean>(false);
    const [noteEditDefaultValue, setNoteEditDefaultValue] = useState<Omit<INoteFields, "content">>({
        id_note: "",
        title: ""
    });

    return (
        <XnoteContext.Provider value=
            {
                {
                    noteContent,
                    setNoteContent,

                    isOpenDialogCreate, 
                    setIsOpenDialogCreate,

                    isOpenDialogEdit, 
                    setIsOpenDialogEdit,

                    noteEditDefaultValue, 
                    setNoteEditDefaultValue
                }
            }
        >
            {children}
        </XnoteContext.Provider>
    )
};