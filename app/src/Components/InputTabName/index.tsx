import React from 'react';
import { InputArea, ButtonInput } from './styled';

const InputTabName:React.FC = () => {
    return (
        <InputArea>            
            <input type="text" name="nameTab" 
                placeholder="New name tab"
            />
            <ButtonInput>Close</ButtonInput>
        </InputArea>
    );
}

export default InputTabName;
