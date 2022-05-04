import React from "react";
import InputTabName2View from "./InputTabNameView";
import { IInputTabName } from "./types/types.component";

const InputTabName2: React.FC<IInputTabName> = ({ onChange, onClickClose, onClickDelete}) => {
    return <InputTabName2View {...{ onChange, onClickClose, onClickDelete}}/>
}

export default InputTabName2;