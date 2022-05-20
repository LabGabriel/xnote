import React from "react";
import DialogAboutView from "./DialogAboutView";
import { IDialogAbout } from "./types/types.component";

const DialogAbout: React.FC<IDialogAbout> = ({ onClose, open }) => {
    return <DialogAboutView {... { onClose, open }} />
}

export default DialogAbout;