import React from "react";
import InputTabNameView from "./InputTabNameView";
import { IInputTabName } from "./types/types.component";

const InputTabName: React.FC<IInputTabName> = ({ onChange, onClickClose, onClickDelete}) => {
    return <InputTabNameView {...{ onChange, onClickClose, onClickDelete}}/>
}

export default InputTabName;