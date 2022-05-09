import { IXnoteContent } from "pages/xnote/types/types.component";
import React, { createContext, useState } from "react";
import { IXnoteContext } from "./types/types.component";

export const XnoteContext = createContext({} as IXnoteContext);

export const XnoteProvider: React.FC = ({ children }) => {
    const [isOpenDialogNewNote, setIsOpenDialogNewNote] = useState<boolean>(false);

    const [noteContent, setNoteContent] = useState<IXnoteContent[]>([]);
    const [xnoteFields, setxnoteFields] = useState<IXnoteContent>({
        id_note: null,
        title_note: "",
        content: ""
    })


    return (
        <XnoteContext.Provider value=
            {
                {
                    noteContent,
                    setNoteContent,

                    xnoteFields,
                    setxnoteFields,

                    isOpenDialogNewNote, 
                    setIsOpenDialogNewNote
                }
            }
        >
            {children}
        </XnoteContext.Provider>
    )
};