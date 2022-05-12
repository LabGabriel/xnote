import Modal from "components/Modal";
import PageStrecture from "components/PageStrecture";
import Toast from "components/Toast";
import DialogCreate from "pages/xnote/DialogCreate";
import React from "react";
import "react-tabs/style/react-tabs.css";
import DialogEdit from "./DialogEdit";
import Tabs from "./Tabs";

const xnoteView: React.FC<any> = (props) => {
    const {
        isToastActive,
        toastMessage,
        isModalActive,
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

                <Tabs />
                <DialogCreate />
                <DialogEdit />

            </PageStrecture>          
        </>
    )
}

export default xnoteView;