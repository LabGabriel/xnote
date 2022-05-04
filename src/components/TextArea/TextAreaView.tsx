import React from "react";
import { TextAreaStyled } from "./styled";
import { ITextArea } from "./types/types.component";

const TextAreaView: React.FC<ITextArea> = ({ dataId, defaultValue, onChange, ...rest }) => {
    return (
        <TextAreaStyled
            className="custom-scroll"
            data-id={dataId}
            autoFocus={true}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder="Add content"
            {...rest}
        />
    )
}

export default TextAreaView;