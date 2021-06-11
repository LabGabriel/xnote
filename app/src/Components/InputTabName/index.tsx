import React from 'react';
import { InputArea, ButtonInput } from './styled';

interface InputTabNameTypes {
    onClick: () => void;
}

const InputTabName:React.FC<InputTabNameTypes> = ({onClick}) => {
    return (
        <InputArea>            
            <input type="text" name="nameTab" 
                placeholder="New name tab"
            />
            <ButtonInput onClick={onClick}>Close</ButtonInput>
        </InputArea>
    );
}

export default InputTabName;
