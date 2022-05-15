import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
    resize: none;    
    width: 95%;
    margin-top: 1rem;
    padding-right: 1rem;
    background-color: transparent;
    height: 75vh;
    color: white;
    font-size: 1rem;
    outline: none;
    border: 0;
    font-family: 'Lexend', sans-serif;
    color: #cfcfcf;

    @media (max-width: 800px) {
        width: 87%;
    }
`