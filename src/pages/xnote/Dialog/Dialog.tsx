import React from "react";
import DialogView from "./DialogView";
import { IDialog } from "./types/types.component";

const Dialog: React.FC<IDialog> = ({ onClose, onSave, onChange, open = false }) => {
    return <DialogView {...{ onClose, onSave, onChange, open }}/>
}

export default Dialog;