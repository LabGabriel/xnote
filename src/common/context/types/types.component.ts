import { INoteFields } from "pages/xnote/common/types/types.dialog";
import { IXnoteContent } from "pages/xnote/types/types.component";
import React from "react";

export interface IXnoteContext {
    noteContent: Array<IXnoteContent>;    
    setNoteContent: React.Dispatch<React.SetStateAction<Array<IXnoteContent>>>;

    isOpenDialogCreate: boolean;
    setIsOpenDialogCreate: React.Dispatch<React.SetStateAction<boolean>>;
    
    isOpenDialogEdit: boolean;
    setIsOpenDialogEdit: React.Dispatch<React.SetStateAction<boolean>>;

    noteEditDefaultValue: Omit<INoteFields, "content">;
    setNoteEditDefaultValue: React.Dispatch<React.SetStateAction<Omit<INoteFields, "content">>>;
}