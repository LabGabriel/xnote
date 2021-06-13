import React from 'react';
import { InputArea, ButtonInput } from './styled';

interface InputTabNameTypes {
    onChange: (object: object) => void;
    onClickClose: (object: object) => void;
    onClickDelete: (object: object) => void;
}

const InputTabName:React.FC<InputTabNameTypes> = ({ onChange, onClickClose, onClickDelete}) => {
    return (
        <InputArea>            
            <input type="text" name="nameTab" 
                placeholder="Note name"
                autoComplete="off"
                autoFocus={true}
                onChange={onChange}
            />
            <div>
                <ButtonInput onClick={onClickDelete}>Delete note</ButtonInput>
                <ButtonInput onClick={onClickClose}>Close</ButtonInput>
            </div>
        </InputArea>
    );
}

export default InputTabName;
