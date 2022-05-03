import React from "react";

import { ModalContainer, ModalHeader, ModalContent, ButtonClose, ModalFooter, LogoFooter } from './styled';
import Logo from 'assets/logo-xnote.svg';
import IconGithub from 'assets/icon/icon-github.svg';
import backgroundModal from 'assets/background-modal.png';

interface ModalTypes {
    onClick: () => void;
}

const Modal: React.FC<ModalTypes> = ({onClick}) => {   
    return (
        <ModalContainer>
            <ModalContent backgroundModal={backgroundModal}>
                <ModalHeader>
                    <div className="logo">
                        <img src={Logo} alt="Logo Xnote" />
                    </div>
                    <div>
                        <ButtonClose onClick={onClick}>
                            <p>+</p>
                        </ButtonClose>
                    </div>
                </ModalHeader>
                <h1>
                    Create new notes is very simple
                </h1>
                <ul>
                    <li>Click in button plus, to create new note</li>
                    <li>To edit name tab or delete note, double click in tab</li>
                </ul>
                <ModalFooter>
                    <a href="https://github.com/Gabriel-Silverio-96/xnote" target="_blank" rel="noreferrer">
                        <LogoFooter>
                            <img src={IconGithub} alt="Icon Github" />
                        </LogoFooter>
                        <p>Respository</p>
                    </a>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;