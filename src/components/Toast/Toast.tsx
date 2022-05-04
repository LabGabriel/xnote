import React from "react";
import ToastView from "./ToastView";
import { IToast } from "./types/types.component";

const Toast: React.FC<IToast> = ({ message }) => {
    return <ToastView {...{ message }}/>
}

export default Toast;