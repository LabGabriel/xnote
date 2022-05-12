import Footer from "./Footer";
import React from "react";
import { Container } from "./styled";

const PageStrecture: React.FC = ({ children }) => {
    return (
        <>
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default PageStrecture;