import Footer from "./Footer";
import React from "react";
import { Main } from "./styled";

const Container: React.FC = ({ children }) => {
    return (
        <>
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default Container;