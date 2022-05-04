import React from "react";
import { FooterStyled, NavFooter } from "./styled";
import { IFooter } from "./types/types.component";

const FooterView: React.FC<IFooter> = ({ onClick, amountNote, onClickAbout }) => {
    return (
        <FooterStyled>
            <div>
                <NavFooter>
                    <li>
                        <button 
                            onClick={onClick} 
                            disabled={amountNote > 1 ? false : true}
                        >
                            Detele all
                        </button>
                    </li>
                </NavFooter>
            </div>
            <div>
                <NavFooter>
                    <li onClick={onClickAbout}>About</li>
                </NavFooter>
            </div>
        </FooterStyled>
    )
};

export default FooterView;