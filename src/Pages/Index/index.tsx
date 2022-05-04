import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Components
import PageStrecture from 'Components/PageStrecture';
import Toast from 'Components/Toast';
import Modal from 'Components/Modal';
import TextArea from 'Components/TextArea';
import InputTabName from 'Components/InputTabName';
import Footer from 'Components/Footer';

//Styled
import { TabListStyled, TabStyled, ButtonPlus } from './styled';

interface xNoteInfoTypes {
    id_note: number;
    title_note: string;
    content: string;
}

const Index: React.FC = () => {
    const [isInputActive, setIsInputActive] = useState(false);
    const [noteStorage, setNoteStorage] = useState<xNoteInfoTypes[]>([]);
    const [idTab, setIdTab] = useState("");
    const [noteContent, setNoteContent] = useState("");

    const [isToastActive, setIsToastActive] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [isModalActive, setIsModalActive] = useState(false);

    const [xNoteInfo, setXNoteInfo] = useState<xNoteInfoTypes>({
        id_note: Math.floor(Math.random() * 1000),
        title_note: "New note",
        content: ""
    })

    const newTab = () => {
        setXNoteInfo(
            {
                id_note: Math.floor(Math.random() * 1000),
                title_note: "New note",
                content: ""
            }
        )
        const storageGet: any = JSON.parse(localStorage.getItem('xNoteInfo')!);
        localStorage.setItem('xNoteInfo', JSON.stringify([...storageGet, xNoteInfo]));
        setNoteStorage(storageGet);

        setToastMessage("Created new note");
        setIsToastActive(true);
        setTimeout(() => {
            setIsToastActive(false);
        }, 2500);
    }

    useEffect(() => {
        const storageGet: any = JSON.parse(localStorage.getItem('xNoteInfo')!);
        if (storageGet === null) {
            localStorage.setItem('xNoteInfo', JSON.stringify([]));
        }

        setNoteStorage(storageGet);

    }, [xNoteInfo, noteContent]);

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

        noteStorage.filter((xNoteInfo: xNoteInfoTypes, index) => {
            if (xNoteInfo.id_note === Number(idTab)) {
                xNoteInfo.title_note = value;
                const storageGet: any = JSON.parse(localStorage.getItem('xNoteInfo')!);
                storageGet.splice(index, 1, xNoteInfo);

                localStorage.setItem('xNoteInfo', JSON.stringify(storageGet));
            }
            return true
        })
    }

    const handleContent = (e: any) => {
        const value = e.target.value;
        const id = e.target.dataset.id;

        noteStorage.filter((xNoteInfo: xNoteInfoTypes, index) => {
            if (xNoteInfo.id_note === Number(id)) {
                xNoteInfo.content = value;
                setNoteContent(value)

                const storageGet: any = JSON.parse(localStorage.getItem('xNoteInfo')!);
                storageGet.splice(index, 1, xNoteInfo)

                localStorage.setItem('xNoteInfo', JSON.stringify(storageGet));
            }
            return true
        })
    }

    const deleteNote = (e: MouseEventHandler<HTMLButtonElement>) => {
        noteStorage.filter((xNoteInfo: xNoteInfoTypes, index) => {
            if (xNoteInfo.id_note === Number(idTab)) {
                const storageGet: any = JSON.parse(localStorage.getItem('xNoteInfo')!);

                storageGet.splice(index, 1)

                localStorage.setItem('xNoteInfo', JSON.stringify(storageGet));
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
        localStorage.setItem('xNoteInfo', '[]');
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
        <>
            <PageStrecture>
                {isToastActive && (
                    <Toast
                        message={toastMessage}
                    />
                )}

                {isModalActive && (
                    <Modal 
                        onClick={hideAbout}
                    />
                )}

                <Tabs>
                    <TabListStyled>
                        <div className="tab-area custom-scroll">
                            <ButtonPlus onClick={newTab}>+</ButtonPlus>
                            {
                                noteStorage !== null && noteStorage.length > 0 ?
                                    (
                                        noteStorage.map((xNoteInfo: xNoteInfoTypes) => {
                                            return (
                                                <TabStyled
                                                    key={xNoteInfo.id_note}
                                                    data-id={xNoteInfo.id_note}
                                                    onDoubleClick={toggleInput}
                                                    title="Double click select options">
                                                    {xNoteInfo.title_note}
                                                </TabStyled>
                                            )
                                        })
                                    ) : "Add new note"
                            }
                        </div>

                        {
                            isInputActive && (
                                <InputTabName
                                    onClickClose={toggleInput}
                                    onClickDelete={deleteNote}
                                    onChange={handleTitleName}
                                />
                            )
                        }

                    </TabListStyled>
                    {
                        noteStorage !== null ?
                            (
                                noteStorage.map((xNoteInfo: xNoteInfoTypes) => {
                                    return (
                                        <TabPanel key={xNoteInfo.id_note}>
                                            <TextArea
                                                dataId={`${xNoteInfo.id_note}`}
                                                defaultValue={xNoteInfo.content}
                                                onChange={handleContent}
                                            />
                                        </TabPanel>
                                    )
                                })
                            ) : ""
                    }
                </Tabs>
            </PageStrecture>
            <Footer
                onClick={deleteAllNote}
                amountNote={noteStorage === null ? 0 : noteStorage.length+1}
                onClickAbout={showAbout}
            />
        </>
    )
}

export default Index;