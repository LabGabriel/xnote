import Container from "components/Container";
import DialogCreate from "pages/xnote/DialogCreate";
import React from "react";
import "react-tabs/style/react-tabs.css";
import DialogEdit from "./DialogEdit";
import Tabs from "./Tabs";

const xnoteView: React.FC = () => {
    return (
        <Container>
            <Tabs />
            <DialogCreate />
            <DialogEdit />
        </Container>
    )
}

export default xnoteView;