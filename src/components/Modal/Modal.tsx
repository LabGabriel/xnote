import React from "react";
import ModalView from "./ModalView";
import { IModal } from "./types/types.component";

const Modal: React.FC<IModal> = ({ onClick }) => {
    return <ModalView {... { onClick }} />
}

export default Modal;