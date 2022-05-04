import Footer from 'components/Footer';
import InputTabName from 'components/InputTabName';
import Modal from 'components/Modal';
import PageStrecture from 'components/PageStrecture';
import TextArea from 'components/TextArea';
import Toast from 'components/Toast';
import React from "react";
import { TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ButtonPlus, TabListStyled, TabStyled } from "./styled";
import { IXnoteFields } from './types/types.component';

const xnoteView: React.FC<any> = (props) => {
    const {
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
    } = props;
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
                                        noteStorage.map((xNoteInfo: IXnoteFields) => {
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
                                noteStorage.map((xNoteInfo: IXnoteFields) => {
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

export default xnoteView;