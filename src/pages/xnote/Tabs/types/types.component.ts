import { INoteFields } from "pages/xnote/common/types/dialog";
import { ChangeEventHandler } from "react";
import { TabsProps } from "react-tabs";

export interface ITabs extends TabsProps {
    storage: INoteFields[];
    openDialogCreate: () => void;
    openDialogEdit: (id_note: string, title: string) => void;
    handleContent?: ChangeEventHandler<HTMLTextAreaElement>;
    lastSelectedTab: number;
}