import styled from 'styled-components';

export const Footer = styled.footer`
    width: -webkit-fill-available;
    padding: 0.5rem 1rem 0;
    position: fixed;
    left: 0;
    bottom: 0;
    align-content: center;
    display: flex;
    justify-content: space-between;
    
    border: 0.1rem solid #121212;
    border-left: 0;
    border-bottom: 0;
    border-right: 0;
    text-align: right;
    background: #000000;
    width: -moz-available;
    
    div {
        margin-bottom: 1rem;
    }
`;

export const NavFooter = styled.ul`
    list-style: none;
    font-size: 0.8rem;
    display: flex;

    li{
        cursor: pointer;
        &:first-child {
            margin-right: 1rem;
        }

        button {
            background-color: black;
            cursor: pointer;
            border: 0;
            color: #cfcfcf;

            &:disabled {
                color: #282525;
                cursor: not-allowed;
            }
        }
    }
`;