import React from 'react';
import { InputArea, ButtonInput } from './styled';

interface InputTabNameTypes {
    onClick: (object: object) => void;
    onChange: (object: object) => void;
}

const InputTabName:React.FC<InputTabNameTypes> = ({onClick, onChange}) => {
    return (
        <InputArea>            
            <input type="text" name="nameTab" 
                placeholder="Note name"
                autoComplete="off"
                autoFocus={true}
                onChange={onChange}
            />
            <ButtonInput onClick={onClick}>Close</ButtonInput>
        </InputArea>
    );
}

export default InputTabName;
