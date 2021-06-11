import React from 'react';
import { TextAreaStyled } from './styled';

interface TextAreaTypes {
    dataId: string;
    defaultValue: string;
    onChange: (object: object) => void;
}

const TextArea: React.FC<TextAreaTypes> = ({ dataId, defaultValue, onChange}) => {
    return (
        <TextAreaStyled
            className="custom-scroll"
            data-id={dataId}
            autoFocus={true}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder="Add content"
        />
    )
}

export default TextArea;