import React from 'react';
import Footer from 'Components/Footer';

const PageStrecture: React.FC = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PageStrecture;