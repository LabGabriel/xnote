import React from 'react';

import { FooterStyled, NavFooter } from './styled';

interface FooterTypes {
    onClick: () => void;
    amountNote: number;
}

const Footer: React.FC<FooterTypes> = ({onClick, amountNote}) => {
    return (
        <FooterStyled>
            <div>
                <NavFooter>
                    <li>
                        <button onClick={onClick} disabled={amountNote > 1 ? false : true}>Detele all</button>
                    </li>
                </NavFooter>
            </div>
            <div>
                <NavFooter>
                    <li>About</li>
                </NavFooter>
            </div>
        </FooterStyled>
    )
}

export default Footer;