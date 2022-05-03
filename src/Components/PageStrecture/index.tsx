import React from 'react';

//Styled
import { Container } from './styled';

const PageStrecture: React.FC = ({ children }) => {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default PageStrecture;