import React from "react";
import { ToastContainer } from "./styled";
import { IToast } from "./types/types.component";

const ToastView: React.FC<IToast> = ({ message }) => {
    return (
        <ToastContainer>
            <p>{message}</p>
        </ToastContainer>
    )
}

export default ToastView;