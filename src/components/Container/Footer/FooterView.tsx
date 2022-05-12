import React from "react";
import { Footer, NavFooter } from "./styled";
import { IFooter } from "./types/types.component";

const FooterView: React.FC<IFooter> = ({ onDeleteAllNote, amountNote, onDialogAbout }) => {
    return (
        <Footer>
            <div>
                <NavFooter>
                    <li>
                        <button 
                            onClick={onDeleteAllNote} 
                            disabled={amountNote > 1 ? false : true}
                        >
                            Detele all
                        </button>
                    </li>
                </NavFooter>
            </div>
            <div>
                <NavFooter>
                    <li onClick={onDialogAbout}>About</li>
                </NavFooter>
            </div>
        </Footer>
    )
};

export default FooterView;