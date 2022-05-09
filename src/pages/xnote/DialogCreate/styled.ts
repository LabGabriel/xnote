import styled from "styled-components";
import { IDialogStyled } from "./types/types.styled";

export const Dialog = styled.div<IDialogStyled>`
    display: ${({open}) => open ? "flex" : "none"};
    position: fixed; 
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;    
    background-color: rgba(0,0,0,0.4); 
    overflow: auto;   
`

export const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        color: #FFFFFF;
    }
`

export const DialogContent = styled.div`    
    background-color: #262626;    
    border-radius: 0.5em;
    width: 20rem;
    min-height: 5rem;
    padding: 2em;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
`

export const ButtonClose = styled.button`
    font-size: 1rem;
    border: 0.1rem solid transparent;    
    background-color: black;     
    padding: 0.1rem 0.4rem;
    border-radius: 0.2rem;
    cursor: pointer;
    animation: all 0.3s;
    color: #FFFFFF;

    p {
        transform: rotate(45deg);
    }
`

export const DialogBody = styled.div`
    form > span {
        font-size: 0.8rem;
        color: red;
        font-weight: 100;
    }
`

export const DialogFooter = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonPrimary = styled.button`
    background-color: #000000;
    color: #FFFFFF;
    padding: 0.5rem 0.8rem;
    border-radius: 0.4rem;
    border: 0;
    cursor: pointer;
`

export const ButtonSecundary = styled(ButtonPrimary)`
    background-color: transparent;
    border: 0.02rem solid #959595;
    color: #FFFFFF;
`

export const Input = styled.input`
    padding: 0.5rem;
    height: 1.3rem;
    border-radius: 0.5rem !important;
    background-color: #000000;
    border: 0;
    color: #FFFFFF;
    width: -webkit-fill-available;
`