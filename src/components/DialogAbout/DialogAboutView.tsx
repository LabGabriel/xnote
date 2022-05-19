import backgroundModal from "assets/background-modal.png";
import IconGithub from 'assets/icon/icon-github.svg';
import Logo from 'assets/logo-xnote.svg';
import React from "react";
import { ButtonClose, LogoFooter, Dialog, DialogContent, DialogFooter, DialogHeader } from "./styled";
import { IDialogAbout } from "./types/types.component";

const DialogAboutView: React.FC<IDialogAbout> = ({ onClick }) => {
    return (
        <Dialog>
            <DialogContent backgroundModal={backgroundModal}>
                <DialogHeader>
                    <div className="logo">
                        <img src={Logo} alt="Logo Xnote" />
                    </div>
                    <div>
                        <ButtonClose onClick={onClick}>
                            <p>+</p>
                        </ButtonClose>
                    </div>
                </DialogHeader>
                <h1>
                    Create new notes is very simple
                </h1>
                <ul>
                    <li>Click in button plus, to create new note</li>
                    <li>To edit name tab or delete note, double click in tab</li>
                </ul>
                <DialogFooter>
                    <a href="https://github.com/Gabriel-Silverio-96/xnote" target="_blank" rel="noreferrer">
                        <LogoFooter>
                            <img src={IconGithub} alt="Icon Github" />
                        </LogoFooter>
                        <p>Respository</p>
                    </a>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogAboutView;