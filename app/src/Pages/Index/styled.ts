import { Tab, TabList } from "react-tabs";
import styled from "styled-components";

export const TabListStyled = styled(TabList)`
    .tab-area {
        display: flex;
        list-style: none;    
    }    
`

export const TabStyled = styled(Tab)`
    font-size: 1rem;
    background-color: black !important;
    color: white !important;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem !important;
    cursor: pointer;
    border: 0.1rem solid transparent !important;
    animation: all 0.3s;
    color: #cfcfcf !important;

    &.react-tabs__tab--selected {
        border: 0.1rem solid #CD00FE !important;
    }
`

export const ButtonPlus = styled.button`
    font-size: 1rem;
    border: 0.1rem solid white;    
    background-color: black;
    padding: 0.5rem 0.7rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    animation: all 0.3s;
    color: white;

    :hover {
        border-color: #CD00FE;                
    }
    :active {
        color: white;
    }
`