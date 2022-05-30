import styled from "styled-components";
import { IDialogContentStyled } from "./types/types.styled";

export const Dialog = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;  
  background-color: rgba(0,0,0,0.4);
`

export const DialogContent = styled.div<IDialogContentStyled>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 3rem;
    max-width: 31.25rem;
    margin: auto;
    background-color: #262626;
    border-radius: 1.25rem;
    background-image: url(${props => props.backgroundModal});
    background-repeat: no-repeat;

    h1 {
        color: white;
        font-size: 2.5rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    ul {
        list-style: decimal;
        padding-left: 1rem;        

        li {
            margin-bottom: 1rem;
            color: white;
        }
    }

    @media (max-width: 767px) {
        width: 15.625rem;
    }
`

export const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        img {
            width: 4rem;
        }
    }
`

export const ButtonClose = styled.button`
    font-size: 1.5rem;
    border: 0.1rem solid transparent;    
    background-color: black;     
    padding: 0.2rem 0.8rem;
    border-radius: 0.5rem;
    cursor: pointer;
    animation: all 0.3s;
    color: white;

    p {
        transform: rotate(45deg);
    }
`

export const DialogFooter = styled.div`
    margin-top: 5rem;

    a {
        display: flex;
        align-items: center;

        p {
            margin-left: 0.5rem;
            color: white;
            text-decoration: none;
        }
    }
`

export const LogoFooter = styled.div`
    img {
        width: 1.5rem;
        background-color: white;
        padding: 0.5rem;
        border-radius: 50%;
    }
`