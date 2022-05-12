import { XnoteContext } from "common/context/XnoteContext";
import useLocalStorage from "common/hooks/useLocalStorage";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import FooterView from "./FooterView";

const Footer: React.FC = () => {
    const { noteContent, setNoteContent } = useContext(XnoteContext);
    const [, setStorage] = useLocalStorage("xnote", "[]");
    const amountNote = noteContent.length;
    
    const onDeleteAllNote = () => {
        ReactDOM.unstable_batchedUpdates(() => {
            setNoteContent([]);
            setStorage([]);
        })
    };

    const onDialogAbout = () => "";

    return <FooterView {...{ onDeleteAllNote, amountNote, onDialogAbout }} />
}

export default Footer;