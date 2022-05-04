import React from "react";
import { ButtonInput, InputArea } from "./styled";
import { IInputTabName } from "./types/types.component";

const InputTabNameView: React.FC<IInputTabName> = ({ onChange, onClickClose, onClickDelete }) => {
    return (
        <InputArea>            
            <input type="text" name="nameTab" 
                placeholder="Tab name"
                autoComplete="off"
                autoFocus={true}
                onChange={onChange}
            />
            <div>
                <ButtonInput role="button" onClick={onClickDelete}>Delete note</ButtonInput>
                <ButtonInput role="button" onClick={onClickClose}>Close</ButtonInput>
            </div>
        </InputArea>
    )
};

export default InputTabNameView;