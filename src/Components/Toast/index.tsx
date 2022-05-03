import React from "react";
import {ToastContainer} from './styled';

interface ToastTypes {
    message: string
}

const Toast:React.FC<ToastTypes> = ({message}) => {
    return (
        <ToastContainer>
            <p>{message}</p>
        </ToastContainer>
    )
}

export default Toast;