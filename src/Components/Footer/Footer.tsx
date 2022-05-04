import React from "react";
import FooterView from "./FooterView";
import { IFooter } from "./types/types.component";

const Footer: React.FC<IFooter> = ({ onClick, amountNote, onClickAbout }) => {
    return <FooterView {...{onClick, amountNote, onClickAbout}} />
}

export default Footer;