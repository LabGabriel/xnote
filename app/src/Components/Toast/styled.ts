import styled, { keyframes } from "styled-components";

const showToast = keyframes`
  0% {
    right: -8.8rem;
  }
  100% {
    right: 1.2rem;
  }
`

export const ToastContainer = styled.div`
    position: absolute;
    background-color: #262626;
    padding: 0.8rem 1.3rem;
    width: min-content;
    width: -moz-min-content;
    z-index: 10;
    right: 1.2rem;
    white-space: nowrap;
    border-radius: 0.5rem;
    animation: ${showToast} 0.5s;    

    p {
        font-size: 0.8rem;
    }
`

