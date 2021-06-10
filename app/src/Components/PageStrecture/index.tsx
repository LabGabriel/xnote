import React from 'react';
//Styled
import { Container } from './styled';

//Components
import Footer from 'Components/Footer';


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