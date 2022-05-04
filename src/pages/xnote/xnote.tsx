import React, { MouseEventHandler, useEffect, useState } from "react";
import { IXnoteFields } from "./types/types.component";
import XnoteView from "./xnoteView";

const Xnote: React.FC = () => {    
    const [isInputActive, setIsInputActive] = useState<boolean>(false);
    const [noteStorage, setNoteStorage] = useState<IXnoteFields[]>([]);
    const [idTab, setIdTab] = useState<string>("");
    const [noteContent, setNoteContent] = useState<string>("");

    const [isToastActive, setIsToastActive] = useState(false);
    const [toastMessage, setToastMessage] = useState<string>("");
    const [isModalActive, setIsModalActive] = useState<boolean>(false);

    const [xnoteFields, setxnoteFields] = useState<IXnoteFields>({
        id_note: Math.floor(Math.random() * 1000),
        title_note: "New note",
        content: ""
    })

    const newTab = () => {
        setxnoteFields(
            {
                id_note: Math.floor(Math.random() * 1000),
                title_note: "New note",
                content: ""
            }
        )
        const storageGet: any = JSON.parse(localStorage.getItem("xnote")!);
        localStorage.setItem("xnote", JSON.stringify([...storageGet, xnoteFields]));
        setNoteStorage(storageGet);

        setToastMessage("Created new note");
        setIsToastActive(true);
        setTimeout(() => {
            setIsToastActive(false);
        }, 2500);
    }

    useEffect(() => {
        const storageGet: any = JSON.parse(localStorage.getItem("xnote")!);
        if (storageGet === null) {
            localStorage.setItem("xnote", JSON.stringify([]));
        }

        setNoteStorage(storageGet);

    }, [xnoteFields, noteContent]);

    const toggleInput = (e: any) => {
        const id = e.target.dataset.id;
        setIsInputActive(!isInputActive);
        setIdTab(id)
    }

    const handleTitleName = (e: any) => {
        let value = e.target.value;
        if (value === "") {
            value = "Add note name"
        }

        noteStorage.filter((xNoteInfo: IXnoteFields, index: number) => {
            if (xNoteInfo.id_note === Number(idTab)) {
                xNoteInfo.title_note = value;
                const storageGet: any = JSON.parse(localStorage.getItem("xnote")!);
                storageGet.splice(index, 1, xNoteInfo);

                localStorage.setItem("xnote", JSON.stringify(storageGet));
            }
            return true
        })
    }

    const handleContent = (e: any) => {
        const value = e.target.value;
        const id = e.target.dataset.id;

        noteStorage.filter((xNoteInfo: IXnoteFields, index: number) => {
            if (xNoteInfo.id_note === Number(id)) {
                xNoteInfo.content = value;
                setNoteContent(value)

                const storageGet: any = JSON.parse(localStorage.getItem("xnote")!);
                storageGet.splice(index, 1, xNoteInfo)

                localStorage.setItem("xnote", JSON.stringify(storageGet));
            }
            return true
        })
    }

    const deleteNote = (e: MouseEventHandler<HTMLButtonElement>) => {
        noteStorage.filter((xNoteInfo: IXnoteFields, index: number) => {
            if (xNoteInfo.id_note === Number(idTab)) {
                const storageGet: any = JSON.parse(localStorage.getItem("xnote")!);

                storageGet.splice(index, 1)

                localStorage.setItem("xnote", JSON.stringify(storageGet));
                setNoteContent(storageGet);
                setIsInputActive(false);

                setToastMessage("Note deleted");
                setIsToastActive(true);
                setTimeout(() => {
                    setIsToastActive(false);
                }, 2500);
            }
            return true
        })
    }

    const deleteAllNote = () => {
        localStorage.setItem("xnote", '[]');
        setNoteStorage([]);
        setIsInputActive(false);

        setToastMessage("All notes deleted");
        setIsToastActive(true);
        setTimeout(() => {
            setIsToastActive(false);
        }, 2500);
    }

    const showAbout = () => {
        setIsModalActive(true)
    }

    const hideAbout = () => {
        setIsModalActive(false)
    }
    return (
        <XnoteView 
            {...{ 
                noteStorage,
                isToastActive,
                toastMessage, 
                isModalActive, 
                newTab,
                toggleInput,
                handleTitleName,
                handleContent,
                deleteNote,
                deleteAllNote,
                showAbout,
                hideAbout,
                isInputActive
            }} 
        />
    )
}

export default Xnote;