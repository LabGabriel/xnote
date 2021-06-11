import styled from 'styled-components';

export const FooterStyled = styled.footer`
    width: -webkit-fill-available;
    padding: 0.5rem 1rem 0;
    position: fixed;
    left: 0;
    bottom: 0;
    align-content: center;
    
    /* border: 0.1rem solid white;     */
    border-left: 0;
    border-bottom: 0;
    border-right: 0;
    text-align: right;
    background: #000000;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3618806989005442) 100%);

    div {
        float: right;
        p {
            font-size: 0.8rem;
            width: min-content;
            width: -moz-min-content;
            background-color: #000000;
            padding: 0.5rem 0.7rem;
        }
    }
`