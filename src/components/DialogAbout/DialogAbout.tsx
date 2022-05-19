import React from "react";
import DialogAboutView from "./DialogAboutView";
import { IDialogAbout } from "./types/types.component";

const DialogAbout: React.FC<IDialogAbout> = ({ onClick }) => {
    return <DialogAboutView {... { onClick }} />
}

export default DialogAbout;