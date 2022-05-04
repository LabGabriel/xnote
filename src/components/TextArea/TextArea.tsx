import React from "react";
import TextAreaView from "./TextAreaView";
import { ITextArea } from "./types/types.component";

const TextArea: React.FC<ITextArea> = ({ dataId, defaultValue, onChange, ...rest }) => {
    return <TextAreaView {...{ dataId, defaultValue, onChange, ...rest }}/>
}

export default TextArea;