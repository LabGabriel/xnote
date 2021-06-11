import React from 'react';
import {TextAreaStyled} from './styled';

interface TextAreaTypes {
    defaultValue: string
}

const TextArea:React.FC<TextAreaTypes> = ({defaultValue}) => {
    return(
        <TextAreaStyled 
            autoFocus={true}
            defaultValue={defaultValue}
        />
    )
}

export default TextArea;