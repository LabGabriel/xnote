import DialogCreate from "pages/xnote/DialogCreate";
import Footer from "components/Footer";
import Modal from "components/Modal";
import PageStrecture from "components/PageStrecture";
import Toast from "components/Toast";
import React from "react";
import "react-tabs/style/react-tabs.css";
import TabsWrapper from "./TabsWrapper";

const xnoteView: React.FC<any> = (props) => {
    const {
        noteContent,
        isToastActive,
        toastMessage,
        isModalActive,
        deleteAllNote,
        showAbout,
        hideAbout,
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

                <TabsWrapper />

                <DialogCreate />

            </PageStrecture>
            <Footer
                onClick={deleteAllNote}
                amountNote={noteContent === null ? 0 : noteContent.length + 1}
                onClickAbout={showAbout}
            />
        </>
    )
}

export default xnoteView;