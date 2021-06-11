import { Tab, TabList } from "react-tabs";
import styled from "styled-components";

export const TabListStyled = styled(TabList)`
    .tab-area {
        display: flex;
        list-style: none;    
        overflow: auto;
        align-items: center;
    }    
`

export const TabStyled = styled(Tab)`
    font-size: 0.8rem;
    background-color: black !important;
    color: white !important;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem !important;
    cursor: pointer;
    border: 0.1rem solid transparent !important;
    font-weight: bold;
    animation: all 0.3s;
    color: #cfcfcf !important;
    white-space: nowrap;

    &.react-tabs__tab--selected {
        border: 0.1rem solid #CD00FE !important;
    }
`

export const ButtonPlus = styled.button`
    font-size: 1.5rem;
    border: 0.1rem solid transparent;    
    background-color: #CD00FE;     
    padding: 0.2rem 0.8rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    animation: all 0.3s;
    color: white;

    :hover {
        border-color: #CD00FE; 
        background-color: black;
    }
    :active {
        color: white;
    }
`