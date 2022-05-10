import { INoteFields } from "pages/xnote/common/types/types.dialog";
import { IXnoteContent } from "pages/xnote/types/types.component";
import React, { createContext, useState } from "react";
import { IXnoteContext } from "./types/types.component";

export const XnoteContext = createContext({} as IXnoteContext);

export const XnoteProvider: React.FC = ({ children }) => {
    const [isOpenDialogCreate, setIsOpenDialogCreate] = useState<boolean>(false);
    const [isOpenDialogEdit, setIsOpenDialogEdit] = useState<boolean>(false);
    const [noteEditDefaultValue, setNoteEditDefaultValue] = useState<Omit<INoteFields, "content">>({
        id_note: "",
        title: ""
    });

    const [noteContent, setNoteContent] = useState<IXnoteContent[]>([]);
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