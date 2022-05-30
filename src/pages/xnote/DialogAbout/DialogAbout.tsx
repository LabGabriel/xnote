import { XnoteContext } from "common/context/XnoteContext";
import React, { useContext } from "react";
import DialogAboutView from "./DialogAboutView";

const DialogAbout: React.FC = () => {
    const { isOpenDialogAbout, setIsOpenDialogAbout } = useContext(XnoteContext)
    const onClose = () => setIsOpenDialogAbout(prevState => !prevState);
    return <DialogAboutView {... { onClose }} open={isOpenDialogAbout} />
}

export default DialogAbout;