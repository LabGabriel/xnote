import { XnoteContext } from "common/context/XnoteContext";
import useLocalStorage from "common/hooks/useLocalStorage";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import FooterView from "./FooterView";

const Footer: React.FC = () => {
    const { noteContent, setNoteContent, setIsOpenDialogAbout } = useContext(XnoteContext);
    const [, setStorage] = useLocalStorage("xnote", "[]");
    const amountNote = noteContent.length;
    
    const onDeleteAllNote = () => {
        ReactDOM.unstable_batchedUpdates(() => {
            setNoteContent([]);
            setStorage([]);
        });
        toast("Delete all note");
    };

    const onDialogAbout = () => setIsOpenDialogAbout(prevState => !prevState);

    return <FooterView {...{ onDeleteAllNote, amountNote, onDialogAbout }} />
}

export default Footer;